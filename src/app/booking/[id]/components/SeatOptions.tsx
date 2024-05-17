import React from "react";

export default function SeatOptions() {
  const OrdinarySeatInfo = {
    title: "Ordinary",
    description:
      "Save money with our most affordable option. You'll still get a comfortable seat, but without the extra perks of our other options",
    benefits: [
      "Built-in entertainment system",
      "Complimentary snacks and drinks",
      "One free carry-on and personal item",
    ],
  };
  const ComfortSeatInfo = {
    title: "Comfort",
    description:
      "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service",
    benefits: [
      "Built-in entertainment system with enhanced video and audio",
      "Access to exclusive food and drink menu",
      "Seats that recline 40% more than comfort",
    ],
  };
  const BusinessSeatInfo = {
    title: "Business",
    description:
      "Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service",
    benefits: [
      "Extended leg room",
      "Personalized service",
      "Two free carry-on and personal item",
    ],
  };

  return (
    <>
      <div className=" max-w-7xl self-stretch grow shrink basis-0 px-4 py-2 backdrop-blur-xl justify-center items-start gap-1 inline-flex">
        {/* Ordinary Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <svg
            width="320"
            height="180"
            viewBox="0 0 640 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.434 217H173C179.627 217 185 222.373 185 229C185 235.627 179.627 241 173 241H83.3019C75.027 241 67.3357 236.737 62.95 229.72L62.65 229.24C59.3198 223.912 63.1505 217 69.434 217Z"
              fill="url(#paint0_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M172.987 241H83.2894C77.6296 241 72.2428 239.006 68 235.5H183.076C180.94 238.809 177.219 241 172.987 241Z"
              fill="#407AEA"
            />
            <path
              d="M125.989 331.5H31C19.9543 331.5 11 322.546 11 311.5C11 300.454 19.9543 291.5 31 291.5H125.989L200.439 138.463C205.743 127.559 208.5 115.592 208.5 103.466V49C208.5 37.9543 217.454 29 228.5 29H323V121L233 308.999H217V331.5H125.989Z"
              fill="url(#paint1_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M231 45.706V70.1722C231 75.695 235.477 80.1722 241 80.1722H278C283.523 80.1722 288 75.695 288 70.1722V45.706C288 38.7239 291.578 32.5775 297 29H240C234.578 32.5775 231 38.7239 231 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M125.989 331.5H31.0002C23.1917 331.5 16.4284 327.025 13.1348 320.5H217V331.5H125.989Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M323.5 29C334.546 29 343.5 37.9543 343.5 49V103.466C343.5 121.655 339.365 139.606 331.408 155.962L256.958 308.999C250.261 322.764 236.296 331.5 220.989 331.5H126C114.954 331.5 106 322.546 106 311.5C106 300.454 114.954 291.5 126 291.5H220.989L295.439 138.463C300.743 127.559 303.5 115.592 303.5 103.466V49C303.5 37.9543 312.454 29 323.5 29Z"
              fill="url(#paint2_linear_747_1244)"
            />
            <path
              d="M245.566 308.547C242.43 314.942 235.89 319 228.72 319H158.367C153.194 319 149 314.84 149 309.709C149 304.578 153.194 300.418 158.367 300.418H228.72L240.561 277.946C242.164 274.904 245.32 273 248.758 273C255.706 273 260.182 280.363 256.983 286.531L245.566 308.547Z"
              fill="url(#paint3_linear_747_1244)"
            />
            <path
              d="M169.434 217H273C279.627 217 285 222.373 285 229C285 235.627 279.627 241 273 241H183.302C175.027 241 167.336 236.737 162.95 229.72L162.65 229.24C159.32 223.912 163.15 217 169.434 217Z"
              fill="url(#paint4_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M273 241H183.302C177.642 241 172.255 239.006 168.013 235.5H283.089C280.952 238.809 277.232 241 273 241Z"
              fill="#407AEA"
            />
            <path
              d="M220.381 217H320.267C326.894 217 332.267 222.373 332.267 229C332.267 235.627 326.894 241 320.267 241H234.007C225.762 241 218.115 236.693 213.841 229.642L213.54 229.147C210.308 223.816 214.147 217 220.381 217Z"
              fill="url(#paint5_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M320.616 241H233.615C228.126 241 222.901 239.006 218.786 235.5H330.401C328.329 238.809 324.72 241 320.616 241Z"
              fill="#407AEA"
            />
            <path
              d="M275.03 331.5H182.898C172.185 331.5 163.5 322.546 163.5 311.5C163.5 300.454 172.185 291.5 182.898 291.5H275.03L347.241 138.463C352.387 127.559 355.06 115.592 355.06 103.466V49C355.06 37.9543 363.745 29 374.459 29H466.117V121L378.823 308.999H363.305V331.5H275.03Z"
              fill="url(#paint6_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M376.883 45.706V70.1722C376.883 75.695 381.361 80.1722 386.883 80.1722H422.169C427.692 80.1722 432.169 75.695 432.169 70.1722V45.706C432.169 38.7239 435.639 32.5775 440.898 29H385.613C380.354 32.5775 376.883 38.7239 376.883 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M275.03 331.5H182.899C175.325 331.5 168.765 327.025 165.571 320.5H363.305V331.5H275.03Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M466.601 29C477.315 29 486 37.9543 486 49V103.466C486 121.655 481.99 139.606 474.272 155.962L402.061 308.999C395.566 322.764 382.02 331.5 367.173 331.5H275.041C264.328 331.5 255.643 322.546 255.643 311.5C255.643 300.454 264.328 291.5 275.041 291.5H367.173L439.384 138.463C444.529 127.559 447.203 115.592 447.203 103.466V49C447.203 37.9543 455.888 29 466.601 29Z"
              fill="url(#paint7_linear_747_1244)"
            />
            <path
              d="M391.012 308.547C387.97 314.942 381.626 319 374.672 319H306.435C301.417 319 297.35 314.84 297.35 309.709C297.35 304.578 301.417 300.418 306.435 300.418H374.672L386.166 277.928C387.712 274.903 390.822 273 394.219 273C400.951 273 405.323 280.093 402.298 286.107L391.012 308.547Z"
              fill="url(#paint8_linear_747_1244)"
            />
            <path
              d="M333.784 217H462.767C469.394 217 474.767 222.373 474.767 229C474.767 235.627 469.394 241 462.767 241H347.644C339.253 241 331.471 236.617 327.121 229.441L326.943 229.147C323.711 223.816 327.549 217 333.784 217Z"
              fill="url(#paint9_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M463.116 241H347.018C341.528 241 336.303 239.006 332.188 235.5H472.901C470.829 238.809 467.22 241 463.116 241Z"
              fill="#407AEA"
            />
            <path
              d="M417.53 331.5H325.398C314.685 331.5 306 322.546 306 311.5C306 300.454 314.685 291.5 325.398 291.5H417.53L489.741 138.463C494.887 127.559 497.56 115.592 497.56 103.466V49C497.56 37.9543 506.245 29 516.959 29H608.617V121L521.323 308.999H505.805V331.5H417.53Z"
              fill="url(#paint10_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M519.383 45.706V70.1722C519.383 75.695 523.861 80.1722 529.383 80.1722H564.669C570.192 80.1722 574.669 75.695 574.669 70.1722V45.706C574.669 38.7239 578.139 32.5775 583.398 29H528.113C522.854 32.5775 519.383 38.7239 519.383 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M417.53 331.5H325.399C317.825 331.5 311.265 327.025 308.071 320.5H505.805V331.5H417.53Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M609.101 29C619.815 29 628.5 37.9543 628.5 49V103.466C628.5 121.655 624.49 139.606 616.772 155.962L544.561 308.999C538.066 322.764 524.52 331.5 509.673 331.5H417.541C406.828 331.5 398.143 322.546 398.143 311.5C398.143 300.454 406.828 291.5 417.541 291.5H509.673L581.884 138.463C587.029 127.559 589.703 115.592 589.703 103.466V49C589.703 37.9543 598.388 29 609.101 29Z"
              fill="url(#paint11_linear_747_1244)"
            />
            <path
              d="M533.512 308.547C530.47 314.942 524.126 319 517.172 319H448.935C443.917 319 439.85 314.84 439.85 309.709C439.85 304.578 443.917 300.418 448.935 300.418H517.172L528.666 277.928C530.212 274.903 533.322 273 536.719 273C543.451 273 547.823 280.093 544.798 286.107L533.512 308.547Z"
              fill="url(#paint12_linear_747_1244)"
            />
            <path
              d="M459.874 217H559.759C566.387 217 571.759 222.373 571.759 229C571.759 235.627 566.387 241 559.759 241H473.499C465.254 241 457.607 236.693 453.333 229.642L453.033 229.147C449.801 223.816 453.639 217 459.874 217Z"
              fill="url(#paint13_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M560.12 241H473.12C467.63 241 462.406 239.006 458.291 235.5H569.906C567.834 238.809 564.225 241 560.12 241Z"
              fill="#407AEA"
            />
            <defs>
              <linearGradient
                id="paint0_linear_747_1244"
                x1="120"
                y1="217"
                x2="120"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_747_1244"
                x1="167"
                y1="29"
                x2="167"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_747_1244"
                x1="224.75"
                y1="29"
                x2="224.75"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_747_1244"
                x1="255.5"
                y1="273"
                x2="147.5"
                y2="312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_747_1244"
                x1="220"
                y1="217"
                x2="220"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_747_1244"
                x1="269.222"
                y1="217"
                x2="269.222"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_747_1244"
                x1="314.808"
                y1="29"
                x2="314.808"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_747_1244"
                x1="370.821"
                y1="29"
                x2="370.821"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_747_1244"
                x1="400.647"
                y1="273"
                x2="295.174"
                y2="309.942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_747_1244"
                x1="382.624"
                y1="217"
                x2="382.624"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_747_1244"
                x1="457.308"
                y1="29"
                x2="457.308"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_747_1244"
                x1="513.321"
                y1="29"
                x2="513.321"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_747_1244"
                x1="543.147"
                y1="273"
                x2="437.674"
                y2="309.942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_747_1244"
                x1="508.714"
                y1="217"
                x2="508.714"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="h-60 flex-col gap-4 flex">
            {/* Title */}
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {OrdinarySeatInfo.title}
              </div>
              {/* <div className="px-1.5 py-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none">
                  Selected
                </div>
              </div> */}
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {OrdinarySeatInfo.description}
            </div>
            <div className="w-8 h-1 opacity-50 bg-emerald-300 p-1" />
            {/* Benefits */}
            <ul className="">
              {OrdinarySeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-emerald-300 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Economy Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <svg
            width="320"
            height="180"
            viewBox="0 0 640 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M69.434 217H173C179.627 217 185 222.373 185 229C185 235.627 179.627 241 173 241H83.3019C75.027 241 67.3357 236.737 62.95 229.72L62.65 229.24C59.3198 223.912 63.1505 217 69.434 217Z"
              fill="url(#paint0_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M172.987 241H83.2894C77.6296 241 72.2428 239.006 68 235.5H183.076C180.94 238.809 177.219 241 172.987 241Z"
              fill="#407AEA"
            />
            <path
              d="M125.989 331.5H31C19.9543 331.5 11 322.546 11 311.5C11 300.454 19.9543 291.5 31 291.5H125.989L200.439 138.463C205.743 127.559 208.5 115.592 208.5 103.466V49C208.5 37.9543 217.454 29 228.5 29H323V121L233 308.999H217V331.5H125.989Z"
              fill="url(#paint1_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M231 45.706V70.1722C231 75.695 235.477 80.1722 241 80.1722H278C283.523 80.1722 288 75.695 288 70.1722V45.706C288 38.7239 291.578 32.5775 297 29H240C234.578 32.5775 231 38.7239 231 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M125.989 331.5H31.0002C23.1917 331.5 16.4284 327.025 13.1348 320.5H217V331.5H125.989Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M323.5 29C334.546 29 343.5 37.9543 343.5 49V103.466C343.5 121.655 339.365 139.606 331.408 155.962L256.958 308.999C250.261 322.764 236.296 331.5 220.989 331.5H126C114.954 331.5 106 322.546 106 311.5C106 300.454 114.954 291.5 126 291.5H220.989L295.439 138.463C300.743 127.559 303.5 115.592 303.5 103.466V49C303.5 37.9543 312.454 29 323.5 29Z"
              fill="url(#paint2_linear_747_1244)"
            />
            <path
              d="M245.566 308.547C242.43 314.942 235.89 319 228.72 319H158.367C153.194 319 149 314.84 149 309.709C149 304.578 153.194 300.418 158.367 300.418H228.72L240.561 277.946C242.164 274.904 245.32 273 248.758 273C255.706 273 260.182 280.363 256.983 286.531L245.566 308.547Z"
              fill="url(#paint3_linear_747_1244)"
            />
            <path
              d="M169.434 217H273C279.627 217 285 222.373 285 229C285 235.627 279.627 241 273 241H183.302C175.027 241 167.336 236.737 162.95 229.72L162.65 229.24C159.32 223.912 163.15 217 169.434 217Z"
              fill="url(#paint4_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M273 241H183.302C177.642 241 172.255 239.006 168.013 235.5H283.089C280.952 238.809 277.232 241 273 241Z"
              fill="#407AEA"
            />
            <path
              d="M220.381 217H320.267C326.894 217 332.267 222.373 332.267 229C332.267 235.627 326.894 241 320.267 241H234.007C225.762 241 218.115 236.693 213.841 229.642L213.54 229.147C210.308 223.816 214.147 217 220.381 217Z"
              fill="url(#paint5_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M320.616 241H233.615C228.126 241 222.901 239.006 218.786 235.5H330.401C328.329 238.809 324.72 241 320.616 241Z"
              fill="#407AEA"
            />
            <path
              d="M275.03 331.5H182.898C172.185 331.5 163.5 322.546 163.5 311.5C163.5 300.454 172.185 291.5 182.898 291.5H275.03L347.241 138.463C352.387 127.559 355.06 115.592 355.06 103.466V49C355.06 37.9543 363.745 29 374.459 29H466.117V121L378.823 308.999H363.305V331.5H275.03Z"
              fill="url(#paint6_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M376.883 45.706V70.1722C376.883 75.695 381.361 80.1722 386.883 80.1722H422.169C427.692 80.1722 432.169 75.695 432.169 70.1722V45.706C432.169 38.7239 435.639 32.5775 440.898 29H385.613C380.354 32.5775 376.883 38.7239 376.883 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M275.03 331.5H182.899C175.325 331.5 168.765 327.025 165.571 320.5H363.305V331.5H275.03Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M466.601 29C477.315 29 486 37.9543 486 49V103.466C486 121.655 481.99 139.606 474.272 155.962L402.061 308.999C395.566 322.764 382.02 331.5 367.173 331.5H275.041C264.328 331.5 255.643 322.546 255.643 311.5C255.643 300.454 264.328 291.5 275.041 291.5H367.173L439.384 138.463C444.529 127.559 447.203 115.592 447.203 103.466V49C447.203 37.9543 455.888 29 466.601 29Z"
              fill="url(#paint7_linear_747_1244)"
            />
            <path
              d="M391.012 308.547C387.97 314.942 381.626 319 374.672 319H306.435C301.417 319 297.35 314.84 297.35 309.709C297.35 304.578 301.417 300.418 306.435 300.418H374.672L386.166 277.928C387.712 274.903 390.822 273 394.219 273C400.951 273 405.323 280.093 402.298 286.107L391.012 308.547Z"
              fill="url(#paint8_linear_747_1244)"
            />
            <path
              d="M333.784 217H462.767C469.394 217 474.767 222.373 474.767 229C474.767 235.627 469.394 241 462.767 241H347.644C339.253 241 331.471 236.617 327.121 229.441L326.943 229.147C323.711 223.816 327.549 217 333.784 217Z"
              fill="url(#paint9_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M463.116 241H347.018C341.528 241 336.303 239.006 332.188 235.5H472.901C470.829 238.809 467.22 241 463.116 241Z"
              fill="#407AEA"
            />
            <path
              d="M417.53 331.5H325.398C314.685 331.5 306 322.546 306 311.5C306 300.454 314.685 291.5 325.398 291.5H417.53L489.741 138.463C494.887 127.559 497.56 115.592 497.56 103.466V49C497.56 37.9543 506.245 29 516.959 29H608.617V121L521.323 308.999H505.805V331.5H417.53Z"
              fill="url(#paint10_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M519.383 45.706V70.1722C519.383 75.695 523.861 80.1722 529.383 80.1722H564.669C570.192 80.1722 574.669 75.695 574.669 70.1722V45.706C574.669 38.7239 578.139 32.5775 583.398 29H528.113C522.854 32.5775 519.383 38.7239 519.383 45.706Z"
              fill="#BCBAF7"
            />
            <path
              opacity="0.5"
              d="M417.53 331.5H325.399C317.825 331.5 311.265 327.025 308.071 320.5H505.805V331.5H417.53Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M609.101 29C619.815 29 628.5 37.9543 628.5 49V103.466C628.5 121.655 624.49 139.606 616.772 155.962L544.561 308.999C538.066 322.764 524.52 331.5 509.673 331.5H417.541C406.828 331.5 398.143 322.546 398.143 311.5C398.143 300.454 406.828 291.5 417.541 291.5H509.673L581.884 138.463C587.029 127.559 589.703 115.592 589.703 103.466V49C589.703 37.9543 598.388 29 609.101 29Z"
              fill="url(#paint11_linear_747_1244)"
            />
            <path
              d="M533.512 308.547C530.47 314.942 524.126 319 517.172 319H448.935C443.917 319 439.85 314.84 439.85 309.709C439.85 304.578 443.917 300.418 448.935 300.418H517.172L528.666 277.928C530.212 274.903 533.322 273 536.719 273C543.451 273 547.823 280.093 544.798 286.107L533.512 308.547Z"
              fill="url(#paint12_linear_747_1244)"
            />
            <path
              d="M459.874 217H559.759C566.387 217 571.759 222.373 571.759 229C571.759 235.627 566.387 241 559.759 241H473.499C465.254 241 457.607 236.693 453.333 229.642L453.033 229.147C449.801 223.816 453.639 217 459.874 217Z"
              fill="url(#paint13_linear_747_1244)"
            />
            <path
              opacity="0.5"
              d="M560.12 241H473.12C467.63 241 462.406 239.006 458.291 235.5H569.906C567.834 238.809 564.225 241 560.12 241Z"
              fill="#407AEA"
            />
            <defs>
              <linearGradient
                id="paint0_linear_747_1244"
                x1="120"
                y1="217"
                x2="120"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_747_1244"
                x1="167"
                y1="29"
                x2="167"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_747_1244"
                x1="224.75"
                y1="29"
                x2="224.75"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_747_1244"
                x1="255.5"
                y1="273"
                x2="147.5"
                y2="312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_747_1244"
                x1="220"
                y1="217"
                x2="220"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_747_1244"
                x1="269.222"
                y1="217"
                x2="269.222"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_747_1244"
                x1="314.808"
                y1="29"
                x2="314.808"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_747_1244"
                x1="370.821"
                y1="29"
                x2="370.821"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_747_1244"
                x1="400.647"
                y1="273"
                x2="295.174"
                y2="309.942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_747_1244"
                x1="382.624"
                y1="217"
                x2="382.624"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_747_1244"
                x1="457.308"
                y1="29"
                x2="457.308"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint11_linear_747_1244"
                x1="513.321"
                y1="29"
                x2="513.321"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint12_linear_747_1244"
                x1="543.147"
                y1="273"
                x2="437.674"
                y2="309.942"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint13_linear_747_1244"
                x1="508.714"
                y1="217"
                x2="508.714"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BCBAF7" />
                <stop offset="1" stop-color="#8684F1" />
              </linearGradient>
            </defs>
          </svg>

          <div className="h-60 flex-col gap-4 flex">
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {ComfortSeatInfo.title}
              </div>
              <div className="px-1.5 py-0.5 bg-gradient-to-b from-indigo-500 to-indigo-700 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none whitespace-nowrap">
                  Best Value
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {ComfortSeatInfo.description}
            </div>
            <div className="w-8 h-1 p-1 opacity-50 bg-emerald-300" />
            <ul className="">
              {ComfortSeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-emerald-300 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Business Information */}
        <div className="px-2 py-8 w-96 rounded-lg flex-col justify-start items-center gap-4 inline-flex">
          <svg
            width="320"
            height="180"
            viewBox="0 0 640 360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M134.434 217H238C244.627 217 250 222.373 250 229C250 235.627 244.627 241 238 241H148.302C140.027 241 132.336 236.737 127.95 229.72L127.65 229.24C124.32 223.912 128.15 217 134.434 217Z"
              fill="url(#paint0_linear_747_1243)"
            />
            <path
              opacity="0.5"
              d="M237.987 241H148.289C142.63 241 137.243 239.006 133 235.5H248.076C245.94 238.809 242.219 241 237.987 241Z"
              fill="#407AEA"
            />
            <path
              d="M170.989 331.5H76C64.9543 331.5 56 322.546 56 311.5C56 300.454 64.9543 291.5 76 291.5H170.989L245.439 138.463C250.743 127.559 253.5 115.592 253.5 103.466V49C253.5 37.9543 262.454 29 273.5 29H388V121L278 308.999H262V331.5H170.989Z"
              fill="url(#paint1_linear_747_1243)"
            />
            <path
              opacity="0.5"
              d="M281 45.706V70.1722C281 75.695 285.477 80.1722 291 80.1722H336.636C342.159 80.1722 346.636 75.695 346.636 70.1722V45.706C346.636 38.7239 350.756 32.5775 357 29H291.364C285.12 32.5775 281 38.7239 281 45.706Z"
              fill="#D5FFFA"
            />
            <path
              opacity="0.5"
              d="M170.854 331.5H75.8654C68.0569 331.5 61.2936 327.025 58 320.5H261.865V331.5H170.854Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M388.5 29C399.546 29 408.5 37.9543 408.5 49V103.466C408.5 121.655 404.365 139.606 396.408 155.962L321.958 308.999C315.261 322.764 301.296 331.5 285.989 331.5H191C179.954 331.5 171 322.546 171 311.5C171 300.454 179.954 291.5 191 291.5H285.989L360.439 138.463C365.743 127.559 368.5 115.592 368.5 103.466V49C368.5 37.9543 377.454 29 388.5 29Z"
              fill="url(#paint2_linear_747_1243)"
            />
            <path
              d="M310.566 308.547C307.43 314.942 300.89 319 293.72 319H223.367C218.194 319 214 314.84 214 309.709C214 304.578 218.194 300.418 223.367 300.418H293.72L305.561 277.946C307.164 274.904 310.32 273 313.758 273C320.706 273 325.182 280.363 321.983 286.531L310.566 308.547Z"
              fill="url(#paint3_linear_747_1243)"
            />
            <path
              d="M279.434 217H413C419.627 217 425 222.373 425 229C425 235.627 419.627 241 413 241H293.302C285.027 241 277.336 236.737 272.95 229.72L272.65 229.24C269.32 223.912 273.15 217 279.434 217Z"
              fill="url(#paint4_linear_747_1243)"
            />
            <path
              opacity="0.5"
              d="M412.987 241H293.289C287.63 241 282.243 239.006 278 235.5H423.076C420.94 238.809 417.219 241 412.987 241Z"
              fill="#407AEA"
            />
            <path
              d="M345.989 331.5H251C239.954 331.5 231 322.546 231 311.5C231 300.454 239.954 291.5 251 291.5H345.989L420.439 138.463C425.743 127.559 428.5 115.592 428.5 103.466V49C428.5 37.9543 437.454 29 448.5 29H563V121L453 308.999H437V331.5H345.989Z"
              fill="url(#paint5_linear_747_1243)"
            />
            <path
              d="M345.989 331.5H251C239.954 331.5 231 322.546 231 311.5C231 300.454 239.954 291.5 251 291.5H345.989L420.439 138.463C425.743 127.559 428.5 115.592 428.5 103.466V49C428.5 37.9543 437.454 29 448.5 29H563V121L453 308.999H437V331.5H345.989Z"
              fill="url(#paint6_linear_747_1243)"
            />
            <path
              opacity="0.5"
              d="M456 45.706V70.1722C456 75.695 460.477 80.1722 466 80.1722H511.636C517.159 80.1722 521.636 75.695 521.636 70.1722V45.706C521.636 38.7239 525.756 32.5775 532 29H466.364C460.12 32.5775 456 38.7239 456 45.706Z"
              fill="#D5FFFA"
            />
            <path
              opacity="0.5"
              d="M345.854 331.5H250.865C243.057 331.5 236.294 327.025 233 320.5H436.865V331.5H345.854Z"
              fill="#1513A0"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M563.5 29C574.546 29 583.5 37.9543 583.5 49V103.466C583.5 121.655 579.365 139.606 571.408 155.962L496.958 308.999C490.261 322.764 476.296 331.5 460.989 331.5H366C354.954 331.5 346 322.546 346 311.5C346 300.454 354.954 291.5 366 291.5H460.989L535.439 138.463C540.743 127.559 543.5 115.592 543.5 103.466V49C543.5 37.9543 552.454 29 563.5 29Z"
              fill="url(#paint7_linear_747_1243)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M563.5 29C574.546 29 583.5 37.9543 583.5 49V103.466C583.5 121.655 579.365 139.606 571.408 155.962L496.958 308.999C490.261 322.764 476.296 331.5 460.989 331.5H366C354.954 331.5 346 322.546 346 311.5C346 300.454 354.954 291.5 366 291.5H460.989L535.439 138.463C540.743 127.559 543.5 115.592 543.5 103.466V49C543.5 37.9543 552.454 29 563.5 29Z"
              fill="url(#paint8_linear_747_1243)"
            />
            <path
              d="M485.566 308.547C482.43 314.942 475.89 319 468.72 319H398.367C393.194 319 389 314.84 389 309.709C389 304.578 393.194 300.418 398.367 300.418H468.72L480.561 277.946C482.164 274.904 485.32 273 488.758 273C495.706 273 500.182 280.363 496.983 286.531L485.566 308.547Z"
              fill="url(#paint9_linear_747_1243)"
            />
            <path
              d="M409.434 217H513C519.627 217 525 222.373 525 229C525 235.627 519.627 241 513 241H423.302C415.027 241 407.336 236.737 402.95 229.72L402.65 229.24C399.32 223.912 403.15 217 409.434 217Z"
              fill="url(#paint10_linear_747_1243)"
            />
            <path
              opacity="0.5"
              d="M513 241H423.302C417.642 241 412.255 239.006 408.013 235.5H523.089C520.952 238.809 517.232 241 513 241Z"
              fill="#407AEA"
            />
            <defs>
              <linearGradient
                id="paint0_linear_747_1243"
                x1="172.812"
                y1="217"
                x2="172.812"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BAECF7" />
                <stop offset="1" stop-color="#84DDF1" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_747_1243"
                x1="232"
                y1="29"
                x2="232"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5CD6C0" />
                <stop offset="0.567708" stop-color="#70F2F2" />
                <stop offset="1" stop-color="#26AEF2" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_747_1243"
                x1="289.75"
                y1="29"
                x2="289.75"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A7DDF" />
                <stop offset="1" stop-color="#3595F4" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_747_1243"
                x1="320.5"
                y1="273"
                x2="212.5"
                y2="312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_747_1243"
                x1="330"
                y1="217"
                x2="330"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BAECF7" />
                <stop offset="1" stop-color="#84DDF1" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_747_1243"
                x1="407"
                y1="29"
                x2="407"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0208333" stop-color="#9D8CF2" />
                <stop offset="0.567708" stop-color="#707FF2" />
                <stop offset="1" stop-color="#266AF2" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_747_1243"
                x1="407"
                y1="29"
                x2="407"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5CD6C0" />
                <stop offset="0.567708" stop-color="#70F2F2" />
                <stop offset="1" stop-color="#26AEF2" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_747_1243"
                x1="464.75"
                y1="29"
                x2="464.75"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4413A0" />
                <stop offset="0.520833" stop-color="#3D13A0" />
                <stop offset="1" stop-color="#1513A0" />
              </linearGradient>
              <linearGradient
                id="paint8_linear_747_1243"
                x1="464.75"
                y1="29"
                x2="464.75"
                y2="331.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4A7DDF" />
                <stop offset="1" stop-color="#3595F4" />
              </linearGradient>
              <linearGradient
                id="paint9_linear_747_1243"
                x1="495.5"
                y1="273"
                x2="387.5"
                y2="312"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#CBD4E6" />
                <stop offset="0.321516" stop-color="#ACC5F6" />
                <stop offset="1" stop-color="#CBD4E6" />
              </linearGradient>
              <linearGradient
                id="paint10_linear_747_1243"
                x1="447.812"
                y1="217"
                x2="447.812"
                y2="241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#BAECF7" />
                <stop offset="1" stop-color="#84DDF1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="h-60 flex-col gap-4 flex">
            <div className="w-36 justify-start items-start gap-4 inline-flex">
              <div className="text-slate-500 text-lg font-semibold">
                {BusinessSeatInfo.title}
              </div>
              <div className="px-1.5 py-0.5 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded justify-start items-center gap-2.5 flex">
                <div className="text-white text-sm font-bold leading-none">
                  Premium
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="self-stretch text-slate-400 text-sm font-normal  whitespace-pre-line">
              {BusinessSeatInfo.description}
            </div>
            <div className="w-8 h-1 p-1 opacity-50 bg-yellow-500" />
            <ul className="">
              {BusinessSeatInfo.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex flex-row items-center gap-2 py-2 px-1"
                >
                  <div className=" w-2.5 h-2.5 bg-yellow-500 rounded-full" />
                  <p className="text-slate-500 text-sm">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
