import fs from "fs";
import path from "path";

export async function GET() {
    const imagesDirectory = path.join(process.cwd(), "public/photos");
    const filenames = fs.readdirSync(imagesDirectory);

    // Filter only image files dynamically
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const images = filenames.filter(file => 
        imageExtensions.includes(file.split(".").pop().toLowerCase())
    );

    return Response.json(images);
}
