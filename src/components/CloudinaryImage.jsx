/**
 * CloudinaryImage — reusable wrapper around @cloudinary/react AdvancedImage
 *
 * Props:
 *  publicId  — Cloudinary public ID (from src/lib/images.js)
 *  alt       — accessibility alt text
 *  className — Tailwind classes for styling
 *  width     — optional explicit width (for fill: auto-scale)
 *  quality   — optional quality override (default: "auto")
 *  crop      — Cloudinary crop mode (default: "fill")
 */

import { AdvancedImage, lazyload, responsive, placeholder } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import { auto as autoFormat } from '@cloudinary/url-gen/qualifiers/format';
import cld from '../lib/cloudinary';

export default function CloudinaryImage({
    publicId,
    alt = '',
    className = '',
    width = 800,
    height,
    crop = 'fill',
}) {
    const img = cld
        .image(publicId)
        .format(autoFormat())
        .quality(autoQuality());

    if (width && height) {
        img.resize(fill().width(width).height(height).gravity(autoGravity()));
    } else if (width) {
        img.resize(fill().width(width).gravity(autoGravity()));
    }

    return (
        <AdvancedImage
            cldImg={img}
            alt={alt}
            className={className}
            plugins={[lazyload(), responsive(), placeholder({ mode: 'blur' })]}
        />
    );
}
