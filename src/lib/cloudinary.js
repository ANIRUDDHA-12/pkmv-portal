import { Cloudinary } from '@cloudinary/url-gen';

// Cloudinary instance — configured from .env
// Set VITE_CLOUDINARY_CLOUD_NAME in your .env file
const cld = new Cloudinary({
    cloud: {
        cloudName: 'deqeu0xv1',
    },
    url: {
        secure: true, // always serve over https
    },
});

export default cld;
