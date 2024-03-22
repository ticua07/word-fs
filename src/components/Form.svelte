<script lang="ts">
  let hasSubmitted = false;
  let tooltip: HTMLSpanElement;
  let currentFile: File | undefined;
  let words = "";
  let alreadyUploaded = false;

  const submitForm = async (e: Event) => {
    e.preventDefault();

    if (alreadyUploaded) {
      return;
    } else {
      alreadyUploaded = true;
    }

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
    alreadyUploaded = false;
    if (event.currentTarget.files.length > 0) {
      currentFile = event.currentTarget.files[0];
    }
  };

  const copyLink = (event: Event) => {
    navigator.clipboard.writeText(
      `${window.location.origin}/get?code=${words}`
    );

    tooltip.classList.replace("opacity-0", "opacity-100");
    setTimeout(() => {
      tooltip.classList.replace("opacity-100", "opacity-0");
    }, 1000);
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
  <span
    bind:this={tooltip}
    class="absolute not-italic opacity-0 transition-opacity bg-neutral-800 px-2 py-2 w-36 rounded-md text-white top-2 text-lg text-center"
    >Copied link</span
  >

  {#if hasSubmitted}
    <section class=" text-gray-600">
      <p class="text-center text-white">
        Use the following code to access the uploaded file or
        <button
          type="button"
          on:click={copyLink}
          class="text-sky-400 underline decoration-sky-400 italic cursor-pointer relative"
        >
          copy this link
        </button>
      </p>
      <p class="text-center text-white text-2xl py-2">
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
