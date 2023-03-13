import axios from 'axios';
import { NormalizedPhotos } from '../../types/NormalizedPhotos';
import { PhotoData } from '../../types/PhotoData';

async function fetchPhotosList(): Promise<PhotoData[]> {
  try {
    const response = await axios.get(
      `https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=706056d48d618d0866df7d2d3026b145&gallery_id=72157647277042064&format=json&nojsoncallback=1`
    );
    return response.data.photos.photo;
  } catch (error) {
    throw error;
  }
}

export async function loadPhotosList(): Promise<NormalizedPhotos> {
  try {
    const photos = await fetchPhotosList();
    const photosIds = photos ? photos.map((item) => item.id) : [];
    const byId = photos.reduce((acc: { [key: string]: PhotoData }, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
    return { byId, photosIds };
  } catch (error) {
    throw error;
  }
}
