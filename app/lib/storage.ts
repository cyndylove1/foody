import apiClient from '@/config/axiosConfig';

export interface StorageUploadResponse {
  message: string;
  data: {
    file_name: string;
    key: string;
    url: string;
  };
}

export interface StorageOptions {
  bucketType?: string;
  bucketName?: string;
  folder?: string;
}

export const uploadFile = async (
  file: File,
  options?: StorageOptions
): Promise<StorageUploadResponse> => {
  const formData = new FormData();
  formData.append('file', file);

  const params = new URLSearchParams();
  if (options?.bucketType) params.append('bucket_type', options.bucketType);
  if (options?.bucketName) params.append('bucket_name', options.bucketName);
  if (options?.folder) params.append('folder', options.folder);

  const queryString = params.toString();
  const url = `/api/v1/storage/upload${queryString ? `?${queryString}` : ''}`;

  const response = await apiClient.post<StorageUploadResponse>(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

export const deleteFile = async (
  fileName: string,
  options?: StorageOptions
): Promise<{ message: string }> => {
  const params = new URLSearchParams();
  if (options?.bucketType) params.append('bucket_type', options.bucketType);
  if (options?.bucketName) params.append('bucket_name', options.bucketName);
  if (options?.folder) params.append('folder', options.folder);

  const queryString = params.toString();
  const url = `/api/v1/storage/delete/${fileName}${queryString ? `?${queryString}` : ''}`;

  const response = await apiClient.delete<{ message: string }>(url);
  return response.data;
};
