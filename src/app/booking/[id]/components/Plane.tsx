import type { Flight, Seat } from "@prisma/client";

import { SeatType } from "@prisma/client";
import SeatRow from "./SeatRow";
export default function Plane({
  seats,
  flight,
}: {
  seats: Seat[];
  flight: Flight;
}) {
  const businessSeats = seats.filter(
    (seat) => seat.seatType === SeatType.BUSINESS,
  );
  const economySeats = seats.filter(
    (seat) => seat.seatType === SeatType.ECONOMY,
  );
  const firstSeats = seats.filter((seat) => seat.seatType === SeatType.FIRST);
  const planeModel = (
    <svg
      width="2800"
      height="2800"
      viewBox="0 0 2124 2596"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -left-[1000px] top-20 -z-10"
    >
      <path
        d="M828.613 1162.83L828.638 1162.82L828.66 1162.8L888.209 1121.25C896.179 1115.69 903.3 1109.01 909.35 1101.4L933.101 1071.54C934.58 1069.69 935.384 1067.38 935.384 1065.01V999V447.025C935.384 435.724 936.339 424.457 938.304 413.329C945.028 375.253 962.171 280.485 977.487 215.114C987.738 171.36 1000.61 117.634 1015.1 74.8479C1022.35 53.4519 1029.99 34.8196 1037.9 21.545C1041.85 14.9071 1045.86 9.63231 1049.9 6.02229C1053.94 2.41212 1057.98 0.5 1062 0.5C1066.02 0.5 1070.08 2.42713 1074.16 6.06369C1078.24 9.69963 1082.3 15.0101 1086.31 21.6873C1094.34 35.0403 1102.12 53.7665 1109.46 75.2243C1124.14 118.133 1137.01 171.86 1146.51 215.107C1160.81 280.194 1178.31 373.914 1185.41 412.488C1187.56 424.187 1188.62 436.029 1188.62 447.926V999V1065.01C1188.62 1067.38 1189.42 1069.69 1190.9 1071.54L1214.65 1101.4C1220.7 1109.01 1227.82 1115.69 1235.79 1121.25L1295.34 1162.8L1295.36 1162.82L1295.39 1162.83L2077.93 1589.42C2077.94 1589.42 2077.94 1589.43 2077.95 1589.43C2095.58 1600.66 2128.5 1639.11 2122.86 1704.68C2122.61 1707.59 2119.88 1709.48 2117.15 1708.57C2057.1 1688.65 1627.96 1556.53 1399.47 1486.38C1389.91 1483.44 1380.13 1482 1370.13 1482H1192H1191.5V1482.5V1986.5C1191.5 2077.57 1162.12 2213.45 1157.21 2235.56C1156.74 2237.66 1156.24 2239.68 1155.69 2241.77L1139.72 2302.37L1139.62 2302.72L1139.92 2302.92L1509.4 2548.86C1510.74 2550.89 1512.47 2555.62 1513.18 2563.26C1513.88 2570.88 1513.57 2581.37 1510.88 2594.88L1093.16 2481.02L1092.67 2480.89L1092.54 2481.37L1089.02 2494.74L1089.02 2494.75L1089.02 2494.75L1089.01 2494.77L1088.99 2494.84C1088.97 2494.91 1088.94 2495.01 1088.91 2495.14C1088.83 2495.4 1088.72 2495.79 1088.57 2496.28C1088.27 2497.26 1087.82 2498.67 1087.22 2500.35C1086.04 2503.73 1084.27 2508.22 1081.95 2512.71C1079.64 2517.2 1076.78 2521.67 1073.42 2525C1070.07 2528.34 1066.25 2530.5 1062 2530.5C1057.75 2530.5 1053.93 2528.34 1050.58 2525C1047.22 2521.67 1044.36 2517.2 1042.05 2512.71C1039.73 2508.22 1037.96 2503.73 1036.78 2500.35C1036.18 2498.67 1035.73 2497.26 1035.43 2496.28C1035.28 2495.79 1035.17 2495.4 1035.09 2495.14C1035.06 2495.01 1035.03 2494.91 1035.01 2494.84L1034.99 2494.77L1034.98 2494.75L1034.98 2494.75L1034.98 2494.75L1031.46 2481.37L1031.33 2480.89L1030.84 2481.02L611.645 2594.88C608.951 2581.37 608.639 2570.88 609.346 2563.26C610.054 2555.62 611.78 2550.89 613.12 2548.86L984.077 2302.92L984.376 2302.72L984.284 2302.37L968.312 2241.77C967.761 2239.68 967.264 2237.66 966.795 2235.56C961.878 2213.45 932.5 2077.57 932.5 1986.5V1482.5V1482H932H753.87C743.874 1482 734.088 1483.44 724.531 1486.38C496.042 1556.53 66.9033 1688.65 6.84911 1708.57C4.11578 1709.48 1.39242 1707.59 1.14187 1704.68C-4.49969 1639.11 28.4238 1600.66 46.0529 1589.43C46.0573 1589.43 46.0618 1589.42 46.0662 1589.42L828.613 1162.83Z"
        fill="url(#paint0_linear_747_660)"
        stroke="#BCBAF7"
      />
      <defs>
        <linearGradient
          id="paint0_linear_747_660"
          x1="0"
          y1="1127"
          x2="2124"
          y2="1127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#99BBFF" />
          <stop offset="0.489583" stopColor="#CCCCFF" />
          <stop offset="1" stopColor="#99BBFF" />
        </linearGradient>
      </defs>
    </svg>
  );
  const cabin = (
    <svg
      width="220"
      height="4000"
      viewBox="0 0 220 588"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute -top-[1300px] left-[290px] -z-10"
    >
      <path
        d="M1 161C1 161 0.999874 158.5 25.4078 31C31.2891 0.278419 78.5821 0.999988 110 0.999988C141.418 0.999988 188.711 0.27841 194.592 31C219 158.5 219 161 219 161V1813C219 1813 219 1813 204.592 1873.25C197.309 1903.71 110 1903.5 110 1903.5C110 1903.5 22.691 1903.71 15.4078 1873.25C1 1813 1 1813 1 1813L1 161Z"
        fill="white"
        fillOpacity="0.6"
        stroke="#7C8DB0"
        strokeOpacity="0.2"
      />
    </svg>
  );
  const exitRow = (
    <div className="inline-flex h-4 w-48 items-start justify-start gap-0.5 bg-white">
      <div className="relative flex h-4 w-4 flex-col items-start justify-start rounded-sm">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="6" stroke="#7C8DB0" strokeWidth="1.5" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99984 7.66667C9.46007 7.66667 9.83317 7.29357 9.83317 6.83333C9.83317 6.3731 9.46007 6 8.99984 6C8.5396 6 8.1665 6.3731 8.1665 6.83333C8.1665 7.29357 8.5396 7.66667 8.99984 7.66667ZM9.74983 9C9.74983 8.58579 9.41405 8.25 8.99983 8.25C8.58562 8.25 8.24983 8.58579 8.24983 9V11.3333C8.24983 11.7475 8.58562 12.0833 8.99983 12.0833C9.41405 12.0833 9.74983 11.7475 9.74983 11.3333V9Z"
            fill="#7C8DB0"
          />
        </svg>
      </div>
      <div className="text-center text-xs font-semibold text-slate-400">
        Exit row
      </div>
    </div>
  );
  return (
    <div className=" relative h-[550px] w-[550px]">
      {planeModel}
      {cabin}
      <div className=" absolute left-[295px] top-[600px] flex h-96 w-64 flex-col py-4">
        <div className="inline-flex w-52 flex-col items-center justify-start gap-3 rounded-lg bg-white py-3">
          <SeatRow
            flight={flight}
            seats={firstSeats}
            seatsPerRow={4}
            seatType={SeatType.FIRST}
          />
        </div>
        <div className=" inline-flex w-52 flex-col items-center justify-start gap-1 rounded-lg bg-white py-2">
          {exitRow}
          <SeatRow
            flight={flight}
            seats={businessSeats}
            seatType={SeatType.BUSINESS}
          />
          {exitRow}
          <SeatRow
            flight={flight}
            seats={economySeats}
            seatType={SeatType.ECONOMY}
          />
          {exitRow}
        </div>
      </div>
    </div>
  );
}
