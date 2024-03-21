<script lang="ts">
  import type { ChangeEventHandler, EventHandler } from "svelte/elements";

  let hasSubmitted = false;
  let currentFile: File | undefined;
  let words = "";

  const submitForm = async (e: Event) => {
    e.preventDefault();
    hasSubmitted = false;

    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    words = data.code;
    hasSubmitted = true;
  };

  const setCurrentFile = (event: any) => {
    if (event.currentTarget.files.length > 0) {
      currentFile = event.currentTarget.files[0];
      console.log(currentFile);
    }
  };
</script>

<form
  id="uploadForm"
  method="post"
  action="/api/upload"
  enctype="multipart/form-data"
  class="flex flex-col gap-2 w-64 items-center justify-center"
  on:submit={submitForm}
>
  {#if hasSubmitted}
    <section class=" text-gray-600">
      <h2 class="text-center">Use this words to access the uploaded file:</h2>
      <p class="text-center text-white text-2xl">
        {words}
      </p>
    </section>
  {/if}
  <input
    id="upload"
    name="upload"
    type="file"
    class="hidden"
    on:change={setCurrentFile}
  />
  <label
    for="upload"
    class="text-white block border-green-800 border-2 w-64 px-4 py-2 rounded text-center cursor-pointer"
  >
    {#if currentFile}
      {currentFile.name}
    {:else}
      Choose File
    {/if}
  </label>

  <button
    class="text-white block bg-green-800 w-64 px-4 py-2 rounded text-center"
    >Submit</button
  >
</form>
