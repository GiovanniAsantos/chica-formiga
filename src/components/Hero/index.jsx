const Hero = () => {
    return (
      <>
        <div
          style={{
            marginTop: "5vh",
            backgroundColor: "#FA9FAE",
            width: "100%",
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", // Centraliza o conteúdo verticalmente
            position: "relative", // Garante que o conteúdo acima fique sobre o SVG
          }}
        >
          {/* SVG na base da div */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%", // Ocupa toda a largura da div
              height: "auto", // Ajusta a altura de acordo com a largura
              fill: "#F58A88", // Cor mais escura que o rosa da div
            }}
          >
            <path
              fill="#F58A88" // Cor do SVG
              fillOpacity="1"
              d="M0,192L18.5,197.3C36.9,203,74,213,111,186.7C147.7,160,185,96,222,90.7C258.5,85,295,139,332,138.7C369.2,139,406,85,443,58.7C480,32,517,32,554,58.7C590.8,85,628,139,665,181.3C701.5,224,738,256,775,240C812.3,224,849,160,886,128C923.1,96,960,96,997,101.3C1033.8,107,1071,117,1108,106.7C1144.6,96,1182,64,1218,85.3C1255.4,107,1292,181,1329,224C1366.2,267,1403,277,1422,282.7L1440,288L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
            ></path>
          </svg>
          {/* Texto acima do SVG */}
          <h1 style={{ color: "white", zIndex: 1 }}>Seja Bem-vindo ao nosso Site</h1>
        </div>
      </>
    );
  };
  
  export default Hero;
  