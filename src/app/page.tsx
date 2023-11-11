"use client";

import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";
import Zoom from "react-reveal/Zoom";
import Typewriter from "typewriter-effect/dist/core";

export default function Home() {
  const handleDownload = () => {
    // Caminho para a imagem dentro da pasta public
    const imagePath = "/360.png"; // Atualize o caminho conforme necessário

    try {
      // Crie um link <a> temporário para iniciar o download
      const link = document.createElement("a");
      link.href = imagePath;
      link.download = "360";

      // Adicione o link ao DOM e clique nele para iniciar o download
      document.body.appendChild(link);
      link.click();

      // Remova o link do DOM após o download
      document.body.removeChild(link);
    } catch (error) {
      console.error("Erro ao baixar a imagem:", error);
    }
  };

  useEffect(() => {
    const typing = document.getElementById("typing");

    const typewriter = new Typewriter(typing, { loop: true });

    typewriter
      .typeString("Acesse a exibição 3D do projeto")
      .pauseFor(500)
      .deleteAll()
      .start();
  }, []);

  return (
    <main className={`flex w-full h-full min-h-screen p-4 bg-base-white`}>
      <div
        className={`flex bg-primary h-full w-full rounded-sm justify-center al bg-opacity-95 text-center bg-[url("/layered-waves-haikei.svg")] bg-cover`}
      >
        <div className="flex flex-col pt-4 px-4 justify-center items-center">
          <Zoom left>
            <p className="text-6xl text-base-white font-bold">Museu Ibiporã</p>
            <span
              id="typing"
              className="text-xl text-base-white font-bold mb-6 twe"
            >
              Acesse a exibição 3D do projeto
            </span>
            <span className="text-base-white text-center font-semibold mb-3">
              Passo 1: baixar o arquivo da imagem
            </span>
            <button
              onClick={handleDownload}
              className="border-2 border-base-white min-w-[197px] p-2 flex items-center justify-center gap-2 rounded-sm font-bold text-base-white shadow-lg min-h-14"
            >
              <DownloadSimple size={24} color="#fff" />
              Download
            </button>

            <div className="flex flex-col justify-center my-6 gap-3">
              <span className="text-base-white text-center font-semibold">
                Passo 2: baixar o aplicativo
              </span>
              <a
                className="flex items-center justify-center text-base-white bg-base-black w-full h-14 rounded-md"
                href="https://apps.apple.com/br/app/ricoh-theta/id1023254741"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="-mt-1 font-sans text-2xl font-semibold">
                    App Store
                  </div>
                </div>
              </a>
              <a
                className="flex items-center justify-center w-full text-base-white bg-base-black rounded-md h-14"
                href="https://play.google.com/store/apps/details?id=com.xojot.vrplayer&pli=1"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="-mt-1 font-sans text-xl font-semibold">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
            <span className="text-base-white text-center font-semibold">
              Após baixar o aplicativo e o arquivo da imagem, abra a imagem no
              aplicativo. Em seguida, será possível rotacionar a imagem para
              obter uma visão em 360 graus da Sala Brasil no Museu Ibiporã!
            </span>
          </Zoom>
          <img src="/mockup-cell.png" alt="Logo GL" className="w-full h-full" />
        </div>
      </div>
    </main>
  );
}
