/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
               hostname: 'utfs.io'
            },
        ], // Adicione os domínios de onde as imagens serão carregadas
    },
};

export default nextConfig;
