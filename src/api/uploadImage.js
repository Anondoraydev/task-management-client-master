import axios from "axios";
const uploadImage = async (image) => {
  const apiKey = "6e1db85f6ab88ea2edc5847ca2be6134";
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return data.data.display_url;
};

export default uploadImage;
