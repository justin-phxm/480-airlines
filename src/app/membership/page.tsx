import MembershipFeatureCardLarge from "./components/MembershipFeatureCardLarge";
import MembershipFeatureCards from "./components/MembershipFeatureCards";
import MembershipHero from "./components/MembershipHero";

export default function page() {
  const memberBenefits = [
    {
      title: "Airport Lounge Access at a Discounted Price",
      body: "Enjoy the luxury of airport lounges at a special discounted rate! As a registered member, you have access to premium airport lounges, making your travel experience even more comfortable.",
    },
    {
      title: "Free Companion Ticket Annually",
      body: "As a token of our appreciation, registered members receive a complimentary companion ticket every year! Travel with a friend or loved one and create lasting memories together.",
    },
    {
      title: "Monthly Promotion Newsletter",
      body: " Be the first to know about our monthly promotions and special offers. Our registered members receive exclusive access to our monthly newsletter, ensuring you never miss out on a great deal.",
    },
    {
      title: "Personalized Travel Experience",
      body: "Unlock a personalized travel experience tailored just for you. Our registered members enjoy perks that go beyond the ordinary, ensuring your journeys are extraordinary.",
    },
    {
      title: "Company Credit Card",
      body: "Enjoy the convenience of a company credit card. Our registered members receive a company credit card, making it easier than ever to book flights and manage expenses.",
    },
    {
      title: "Dedicated Customer Support",
      body: "Enjoy priority access to our dedicated customer support. Our registered members receive enhanced assistance, ensuring a seamless and stress-free travel experience.",
    },
  ];
  const luggageImage = (
    <svg
      width="374"
      height="449"
      viewBox="0 0 374 449"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=" "
    >
      <circle
        cx="204.204"
        cy="415.488"
        r="11.968"
        fill="url(#paint0_linear_918_1871)"
      />
      <circle
        cx="204.204"
        cy="415.488"
        r="10.472"
        stroke="#393956"
        stroke-opacity="0.5"
        stroke-width="2.992"
      />
      <circle
        cx="11.968"
        cy="11.968"
        r="11.968"
        transform="matrix(-1 0 0 1 295.834 403.52)"
        fill="url(#paint1_linear_918_1871)"
      />
      <circle
        cx="11.968"
        cy="11.968"
        r="10.472"
        transform="matrix(-1 0 0 1 295.834 403.52)"
        stroke="#393956"
        stroke-opacity="0.5"
        stroke-width="2.992"
      />
      <circle
        cx="170.544"
        cy="415.488"
        r="11.968"
        fill="url(#paint2_linear_918_1871)"
      />
      <circle
        cx="170.544"
        cy="415.488"
        r="10.472"
        stroke="#393956"
        stroke-opacity="0.5"
        stroke-width="2.992"
      />
      <circle
        cx="11.968"
        cy="11.968"
        r="11.968"
        transform="matrix(-1 0 0 1 333.234 403.52)"
        fill="url(#paint3_linear_918_1871)"
      />
      <circle
        cx="11.968"
        cy="11.968"
        r="10.472"
        transform="matrix(-1 0 0 1 333.234 403.52)"
        stroke="#393956"
        stroke-opacity="0.5"
        stroke-width="2.992"
      />
      <rect
        x="145.112"
        y="167.152"
        width="187.748"
        height="239.36"
        rx="23.936"
        fill="url(#paint4_linear_918_1871)"
      />
      <path
        d="M145.112 188.272C145.112 176.608 154.568 167.152 166.232 167.152H321.64C327.837 167.152 332.86 172.175 332.86 178.372C332.86 184.568 327.837 189.592 321.64 189.592H146.432C145.703 189.592 145.112 189.001 145.112 188.272Z"
        fill="#5CD6C0"
      />
      <path
        d="M145.112 385.392C145.112 397.056 154.568 406.512 166.232 406.512H321.64C327.837 406.512 332.86 401.489 332.86 395.292C332.86 389.096 327.837 384.072 321.64 384.072H146.432C145.703 384.072 145.112 384.663 145.112 385.392Z"
        fill="#24AD94"
      />
      <path
        d="M282.744 187.793C282.744 175.567 293.461 167.152 306.68 167.152H319.396C332.616 167.152 343.332 175.567 343.332 187.793V385.871C343.332 398.097 332.616 406.512 319.396 406.512H306.68C293.461 406.512 282.744 398.097 282.744 385.871V187.793Z"
        fill="url(#paint5_linear_918_1871)"
      />
      <path
        d="M319.396 167.152H306.68C293.461 167.152 282.744 175.567 282.744 187.793V189.592H343.332V187.793C343.332 175.567 332.616 167.152 319.396 167.152Z"
        fill="#1FAD94"
      />
      <path
        d="M319.396 406.512H306.68C293.461 406.512 282.744 398.097 282.744 385.871V384.072H343.332V385.871C343.332 398.097 332.616 406.512 319.396 406.512Z"
        fill="#149F88"
      />
      <rect
        opacity="0.5"
        x="157.08"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint6_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="170.544"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint7_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="184.008"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint8_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="197.472"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint9_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="210.936"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint10_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="224.4"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint11_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="237.864"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint12_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="251.328"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint13_linear_918_1871)"
      />
      <rect
        opacity="0.5"
        x="264.792"
        y="204.552"
        width="5.984"
        height="164.56"
        rx="2.992"
        fill="url(#paint14_linear_918_1871)"
      />
      <path
        d="M314.138 258.032C313.565 254.453 316.302 250.928 319.926 250.928C322.284 250.928 324.346 252.46 324.814 254.771C325.693 259.103 326.876 267.078 326.876 278.604C326.876 290.13 325.693 298.106 324.814 302.437C324.346 304.748 322.284 306.28 319.926 306.28C316.302 306.28 313.565 302.755 314.138 299.176C314.893 294.452 315.656 287.482 315.656 278.604C315.656 269.726 314.893 262.757 314.138 258.032Z"
        fill="url(#paint15_linear_918_1871)"
      />
      <path
        d="M318.379 309.224C321.222 309.607 325.548 307.839 325.896 304.992C326.004 304.114 325.754 303.222 325.057 302.677C324.01 301.861 322.126 300.757 319.298 300.411C316.47 300.065 314.375 300.681 313.163 301.221C312.354 301.581 311.897 302.387 311.79 303.266C311.441 306.112 315.213 308.872 318.064 309.185C318.116 309.191 318.169 309.197 318.222 309.203C318.275 309.21 318.327 309.217 318.379 309.224Z"
        fill="#4CE0C5"
      />
      <path
        d="M318.381 248.946C315.538 249.325 311.832 252.172 312.246 255.01C312.374 255.885 312.85 256.68 313.666 257.021C314.891 257.533 316.999 258.101 319.818 257.689C322.638 257.278 324.496 256.131 325.523 255.29C326.208 254.73 326.437 253.832 326.309 252.956C325.894 250.118 321.529 248.451 318.696 248.9C318.644 248.909 318.591 248.916 318.539 248.924C318.486 248.932 318.434 248.939 318.381 248.946Z"
        fill="#4CE0C5"
      />
      <rect
        x="230.384"
        y="47.4722"
        width="8.976"
        height="119.68"
        fill="url(#paint16_linear_918_1871)"
      />
      <rect
        x="230.384"
        y="47.4722"
        width="8.976"
        height="119.68"
        fill="url(#paint17_linear_918_1871)"
      />
      <rect
        x="283.492"
        y="47.4722"
        width="8.976"
        height="119.68"
        fill="url(#paint18_linear_918_1871)"
      />
      <rect
        x="283.492"
        y="47.4722"
        width="8.976"
        height="119.68"
        fill="url(#paint19_linear_918_1871)"
      />
      <path
        d="M248.336 27.2761C247.51 27.2761 246.84 26.6063 246.84 25.7801V21.2921C246.84 17.9872 249.519 15.3081 252.824 15.3081H270.028C273.333 15.3081 276.012 17.9872 276.012 21.2921V25.7801C276.012 26.6063 275.343 27.2761 274.516 27.2761H248.336Z"
        fill="url(#paint20_linear_918_1871)"
      />
      <path
        d="M230.384 52.7079C229.558 52.7079 228.888 52.0381 228.888 51.2119V25.0319C228.888 21.727 231.567 19.0479 234.872 19.0479H287.98C291.285 19.0479 293.964 21.727 293.964 25.0319V51.2119C293.964 52.0381 293.294 52.7079 292.468 52.7079H283.492C282.666 52.7079 281.996 52.0381 281.996 51.2119V34.0079C281.996 32.3554 280.657 31.0159 279.004 31.0159H243.848C242.196 31.0159 240.856 32.3554 240.856 34.0078V51.2119C240.856 52.0381 240.186 52.7079 239.36 52.7079H230.384Z"
        fill="url(#paint21_linear_918_1871)"
      />
      <path
        d="M202 396.788V316.752C202 262.522 172.251 249.432 130.94 249.432H115.98V324.232V399.032C115.98 415.556 114.416 428.952 130.94 428.952H175.82C192.344 428.952 202 413.312 202 396.788Z"
        fill="url(#paint22_linear_918_1871)"
      />
      <path
        d="M108.46 252.798C109.626 252.798 121.347 253.025 135.223 253.302C163.199 253.861 187.748 274.932 187.748 302.914V302.914"
        stroke="#1513A0"
        stroke-opacity="0.5"
        stroke-width="5.984"
        stroke-linecap="round"
      />
      <path
        d="M147.356 356.396H204.952C206.605 356.396 207.944 357.736 207.944 359.388V399.032C207.944 413.904 195.888 425.96 181.016 425.96H147.356V356.396Z"
        fill="url(#paint23_linear_918_1871)"
        stroke="url(#paint24_linear_918_1871)"
        stroke-width="5.984"
      />
      <path
        d="M38.1481 305.532C38.1481 276.201 61.9254 252.424 91.2561 252.424H113.696C143.027 252.424 166.804 276.201 166.804 305.532V399.032C166.804 413.904 154.748 425.96 139.876 425.96H65.0761C50.2042 425.96 38.1481 413.904 38.1481 399.032V305.532Z"
        fill="url(#paint25_linear_918_1871)"
        stroke="url(#paint26_linear_918_1871)"
        stroke-width="5.984"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M189.073 301.044C187.596 301.044 186.34 302.122 186.115 303.581L184.044 317.045C183.765 318.858 185.167 320.492 187.001 320.492H191.994C193.828 320.492 195.23 318.858 194.951 317.045L192.88 303.581C192.655 302.122 191.4 301.044 189.923 301.044H189.073ZM187.838 314.508C187.494 314.508 187.195 314.742 187.112 315.075L186.738 316.571C186.62 317.043 186.977 317.5 187.464 317.5H191.532C192.018 317.5 192.375 317.043 192.257 316.571L191.883 315.075C191.8 314.742 191.501 314.508 191.158 314.508H187.838Z"
        fill="url(#paint27_linear_918_1871)"
      />
      <path
        d="M40.3922 373.071C40.3922 352.708 59.3276 336.2 82.6855 336.2H106.328C134.358 336.2 157.08 348.53 157.08 372.966V411.212C157.08 419.357 149.506 425.96 140.163 425.96H48.8509C44.1793 425.96 40.3922 422.659 40.3922 418.586V373.071Z"
        fill="url(#paint28_linear_918_1871)"
      />
      <path
        d="M66.8972 336.948C48.954 336.948 34.4083 351.494 34.4083 369.437V410.358C34.4083 416.083 39.0494 420.724 44.7745 420.724H131.754C137.479 420.724 142.12 416.083 142.12 410.358V369.437C142.12 351.494 127.575 336.948 109.631 336.948H66.8972Z"
        fill="url(#paint29_linear_918_1871)"
      />
      <path
        d="M66.8972 336.948C48.954 336.948 34.4083 351.494 34.4083 369.437V410.358C34.4083 416.083 39.0494 420.724 44.7745 420.724H131.754C137.479 420.724 142.12 416.083 142.12 410.358V369.437C142.12 351.494 127.575 336.948 109.631 336.948H66.8972Z"
        fill="url(#paint30_linear_918_1871)"
      />
      <path
        d="M66.8972 336.948C48.954 336.948 34.4083 351.494 34.4083 369.437V410.358C34.4083 416.083 39.0494 420.724 44.7745 420.724H131.754C137.479 420.724 142.12 416.083 142.12 410.358V369.437C142.12 351.494 127.575 336.948 109.631 336.948H66.8972Z"
        stroke="url(#paint31_linear_918_1871)"
        stroke-width="5.984"
      />
      <path
        opacity="0.5"
        d="M31.4163 369.86H145.112"
        stroke="#1513A0"
        stroke-width="5.984"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M125.908 369.86C124.087 369.86 122.539 371.189 122.263 372.989L119.724 389.551C119.382 391.783 121.11 393.796 123.369 393.796H129.456C131.715 393.796 133.443 391.783 133.1 389.551L130.561 372.989C130.285 371.189 128.737 369.86 126.917 369.86H125.908ZM124.433 386.296C124.01 386.296 123.641 386.584 123.539 386.994L123.081 388.833C122.936 389.415 123.376 389.978 123.975 389.978H128.955C129.554 389.978 129.994 389.415 129.849 388.833L129.391 386.994C129.289 386.584 128.92 386.296 128.497 386.296H124.433Z"
        fill="url(#paint32_linear_918_1871)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_918_1871"
          x1="204.204"
          y1="403.52"
          x2="204.204"
          y2="427.456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8CABCA" />
          <stop offset="1" stop-color="#4E8393" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_918_1871"
          x1="11.968"
          y1="0"
          x2="11.968"
          y2="23.936"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8CABCA" />
          <stop offset="1" stop-color="#4E8393" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_918_1871"
          x1="170.544"
          y1="403.52"
          x2="170.544"
          y2="427.456"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8CABCA" />
          <stop offset="1" stop-color="#4E8393" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_918_1871"
          x1="11.968"
          y1="0"
          x2="11.968"
          y2="23.936"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8CABCA" />
          <stop offset="1" stop-color="#4E8393" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_918_1871"
          x1="169.796"
          y1="167.152"
          x2="238.986"
          y2="406.512"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5CD6C0" />
          <stop offset="1" stop-color="#1FB297" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_918_1871"
          x1="282.744"
          y1="310.02"
          x2="358.063"
          y2="305.868"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#12A58B" />
          <stop offset="1" stop-color="#22C3B3" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_918_1871"
          x1="157.08"
          y1="285.483"
          x2="163.064"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_918_1871"
          x1="170.544"
          y1="285.483"
          x2="176.528"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_918_1871"
          x1="184.008"
          y1="285.483"
          x2="189.992"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_918_1871"
          x1="197.472"
          y1="285.483"
          x2="203.456"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_918_1871"
          x1="210.936"
          y1="285.483"
          x2="216.92"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_918_1871"
          x1="224.4"
          y1="285.483"
          x2="230.384"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_918_1871"
          x1="237.864"
          y1="285.483"
          x2="243.848"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_918_1871"
          x1="251.328"
          y1="285.483"
          x2="257.312"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_918_1871"
          x1="264.792"
          y1="285.483"
          x2="270.776"
          y2="285.483"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#29A38D" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_918_1871"
          x1="319.77"
          y1="250.928"
          x2="319.77"
          y2="306.28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5CD6C0" />
          <stop offset="1" stop-color="#22C3A6" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_918_1871"
          x1="230.384"
          y1="109.652"
          x2="239.36"
          y2="109.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C4C4C4" />
          <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_918_1871"
          x1="230.384"
          y1="107.312"
          x2="239.36"
          y2="107.312"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B0C6DC" />
          <stop offset="0.604167" stop-color="#A5BBCB" />
          <stop offset="0.760417" stop-color="#95ABB3" />
          <stop offset="1" stop-color="#91A7AD" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_918_1871"
          x1="283.492"
          y1="109.652"
          x2="292.468"
          y2="109.652"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C4C4C4" />
          <stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_918_1871"
          x1="283.492"
          y1="107.312"
          x2="292.468"
          y2="107.312"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#B0C6DC" />
          <stop offset="0.604167" stop-color="#A5BBCB" />
          <stop offset="0.760417" stop-color="#95ABB3" />
          <stop offset="1" stop-color="#91A7AD" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_918_1871"
          x1="247.588"
          y1="16.0561"
          x2="276.76"
          y2="18.3001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6B94BD" />
          <stop offset="0.375" stop-color="#5E8DBA" />
          <stop offset="0.719177" stop-color="#4B78A0" />
          <stop offset="1" stop-color="#254F74" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_918_1871"
          x1="228.888"
          y1="35.8779"
          x2="293.964"
          y2="35.8779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5E87B0" />
          <stop offset="0.411458" stop-color="#5A88B2" />
          <stop offset="0.92626" stop-color="#49799C" />
          <stop offset="0.952589" stop-color="#336375" />
          <stop offset="1" stop-color="#19414D" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_918_1871"
          x1="158.97"
          y1="249.432"
          x2="158.97"
          y2="428.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#605DEC" />
          <stop offset="1" stop-color="#2A26D9" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_918_1871"
          x1="177.65"
          y1="353.404"
          x2="177.65"
          y2="428.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1C18CE" />
          <stop offset="1" stop-color="#6F6DEE" />
        </linearGradient>
        <linearGradient
          id="paint24_linear_918_1871"
          x1="177.65"
          y1="353.404"
          x2="177.65"
          y2="428.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#4F4CE6" />
          <stop offset="1" stop-color="#8482ED" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint25_linear_918_1871"
          x1="79.2881"
          y1="255.416"
          x2="148.478"
          y2="428.952"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8F8DF2" />
          <stop offset="0.357212" stop-color="#7977E9" />
          <stop offset="1" stop-color="#5D5AE2" />
        </linearGradient>
        <linearGradient
          id="paint26_linear_918_1871"
          x1="139.196"
          y1="428.952"
          x2="-3.7282"
          y2="332.108"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7370EB" />
          <stop offset="1" stop-color="#B0AFF4" />
        </linearGradient>
        <linearGradient
          id="paint27_linear_918_1871"
          x1="187.001"
          y1="302.166"
          x2="193.733"
          y2="319.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BCBAF7" />
          <stop offset="1" stop-color="#8F8DF2" />
        </linearGradient>
        <linearGradient
          id="paint28_linear_918_1871"
          x1="135.014"
          y1="340.688"
          x2="44.5062"
          y2="425.96"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5855E9" />
          <stop offset="0.473958" stop-color="#4642E3" />
          <stop offset="0.6808" stop-color="#5F5DE3" />
          <stop offset="1" stop-color="#7679E9" />
        </linearGradient>
        <linearGradient
          id="paint29_linear_918_1871"
          x1="91.0387"
          y1="334.383"
          x2="91.0387"
          y2="417.732"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#817FF0" />
          <stop offset="0.511799" stop-color="#6563E5" />
          <stop offset="1" stop-color="#5452E0" />
        </linearGradient>
        <linearGradient
          id="paint30_linear_918_1871"
          x1="52.1971"
          y1="339.94"
          x2="115.197"
          y2="424.593"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#8F8DF2" />
          <stop offset="0.476102" stop-color="#777BE9" />
          <stop offset="1" stop-color="#5D5AE2" />
        </linearGradient>
        <linearGradient
          id="paint31_linear_918_1871"
          x1="116.008"
          y1="417.732"
          x2="50.2402"
          y2="340.031"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7370EB" />
          <stop offset="1" stop-color="#B0AFF4" />
        </linearGradient>
        <linearGradient
          id="paint32_linear_918_1871"
          x1="123.487"
          y1="371.241"
          x2="131.795"
          y2="392.395"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BCBAF7" />
          <stop offset="1" stop-color="#8F8DF2" />
        </linearGradient>
      </defs>
    </svg>
  );
  return (
    <>
      <MembershipHero />
      <section className="bg-gradient-to-t from-indigo-300 to-white text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <MembershipFeatureCardLarge />
          <ul className="grid gap-8 md:grid-cols-2">
            {memberBenefits.map((benefit, index) => (
              <MembershipFeatureCards
                benefit={benefit}
                index={index}
                key={index}
              />
            ))}
          </ul>
        </div>
        <section className="flex justify-center rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 ">
          <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
            Pack Your Bags!
          </h2>
          {luggageImage}
        </section>
      </section>
    </>
  );
}
