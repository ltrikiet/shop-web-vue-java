import axiosClient from '@/utils/axiosClient';

const blobToBase64 = (blob: Blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise<string | ArrayBuffer | null>((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};

const getImage = async (path: string) => {
  const { data } = await axiosClient.get(`/file`, { params: { path }, responseType: 'blob' });
  return blobToBase64(data);
};

const postImage = async (file: File, customPath?: string) => {
  return await axiosClient.post(
    '/file/upload',
    { file, customPath },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  );
};

export default {
  getImage,
  postImage
};
