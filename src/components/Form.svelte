<script lang="ts">
  const submitForm = async (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    console.log(formData.get("upload") as File);
  };
</script>

<form
  id="uploadForm"
  method="post"
  action="/api/upload"
  enctype="multipart/form-data"
  class="flex flex-col gap-2"
  on:submit={submitForm}
>
  <input id="upload" name="upload" type="file" class="hidden" />

  <label
    for="upload"
    class="text-white block border-green-800 border-2 w-48 px-4 py-2 rounded text-center cursor-pointer"
  >
    Choose File
  </label>

  <button
    class="text-white block bg-green-800 w-48 px-4 py-2 rounded text-center"
    >Submit</button
  >
</form>
