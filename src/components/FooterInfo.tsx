import React from "react";
import ImageSVG, { ImageType } from "./Image";

interface Props {
  readonly text: React.ReactNode;
  readonly hideFooterTriangle?: boolean;
  readonly pageColor: string;
  readonly footerStyle?: string;
}

interface FooterTheme {
  [key: string]: {
    footerLine: string;
    footerTriangle: string[];
  };
}

const colors: FooterTheme = {
  ergoferon: {
    footerLine:
      "linear-gradient(183.47deg, rgb(0, 128, 131) -35.279%,rgb(63, 190, 193) 93.817%)",
    footerTriangle: ["rgb(0, 128, 131)", "rgb(63, 190, 193)"],
  },
  rengalin: {
    footerLine:
      "linear-gradient(133.61deg, rgb(225, 9, 32) -23.74%,rgba(225, 9, 32, 0) 145.222%)",
    footerTriangle: ["rgb(231, 14, 0)", "rgb(255, 119, 119)"],
  },
  tenotenKids: {
    footerLine:
      "linear-gradient(133.61deg, rgb(124, 199, 0) -23.74%,rgba(165, 215, 6, 0.38) 80.611%,rgba(169, 225, 9, 0) 145.222%)",
    footerTriangle: ["rgb(124, 199, 0)", "rgb(198, 245, 121)"],
  },
  tenoten: {
    footerLine:
      "linear-gradient(133.61deg, rgb(25, 160, 86) -23.74%,rgba(47, 215, 6, 0.38) 80.611%,rgba(78, 225, 9, 0) 145.222%)",
    footerTriangle: ["rgb(3, 158, 0)", "rgb(159, 255, 168)"],
  },
  anaferonKids: {
    footerLine:
      "linear-gradient(133.61deg, rgb(0, 136, 212) -23.74%,rgba(6, 177, 215, 0.38) 80.611%,rgba(9, 173, 225, 0) 145.222%)",
    footerTriangle: ["rgb(16, 145, 218)", "rgb(125, 197, 237)"],
  },
  anaferon: {
    footerLine:
      "linear-gradient(133.61deg, rgb(81, 106, 207) -23.74%,rgb(169, 186, 255) 80.611%,rgb(236, 240, 255) 145.222%)",
    footerTriangle: ["rgb(81, 106, 207)", "rgb(159, 178, 255)"],
  },
};

const FooterInfo: React.FC<Props> = (props) => {
  return (
    <>
      <div className={`footer-info ${props.footerStyle}`}>
        <ImageSVG type={ImageType.FooterInfoIcon}></ImageSVG>
        <span>{props.text}</span>
      </div>

      <div
        className="footer-line"
        style={{ background: colors[props.pageColor].footerLine }}
      ></div>
      <svg
        width="73.000000"
        height="73.000000"
        viewBox="0 0 73 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-home-icon"
      >
        <desc>Created with Pixso.</desc>
        <defs>
          <filter
            id="filter_89_12679_dd"
            x="0.000000"
            y="0.000000"
            width="73.000000"
            height="73.000000"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0" dy="4" />
            <feGaussianBlur stdDeviation="1.33333" />
            <feComposite in2="hardAlpha" operator="out" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect_dropShadow_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect_dropShadow_1"
              result="shape"
            />
          </filter>
        </defs>
        <path
          id="Vector"
          d="M28.1704 22.1343C30.9507 19.9062 33.707 17.6477 36.5 15.4349C39.688 17.9562 42.8364 20.5295 46.0024 23.0801C43.4038 25.6039 40.8735 28.1975 38.3013 30.748C37.146 31.9261 35.9438 33.0586 34.8218 34.2684C33.688 34.3167 32.5532 34.2456 31.4204 34.3014C30.7061 34.3383 30.0864 34.9578 30.042 35.67C29.9922 36.8037 30.0557 37.9399 30.0151 39.0736C28.4878 40.5133 27.0396 42.0342 25.5439 43.5068C24.8901 44.1301 24.3101 44.8385 23.5635 45.3578C23.5332 39.8849 23.561 34.4106 23.5493 28.9376C23.5659 28.4413 23.373 27.9297 22.9707 27.6237C22.6646 27.3571 22.2432 27.3253 21.8623 27.2543C23.9331 25.5099 26.0747 23.8494 28.1704 22.1343Z"
          fill={colors[props.pageColor].footerTriangle[0]}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <g filter="url(#filter_89_12679_dd)">
          <path
            id="Vector"
            d="M13.0962 0L59.5405 0C61.9907 0.13208 64.3599 1.19458 66.1006 2.92114C64.0781 5.0083 61.9946 7.03699 59.9482 9.10254C56.6895 12.3601 53.4307 15.619 50.1714 18.8767C49.4951 19.5444 48.8423 20.2375 48.1401 20.8787C44.6147 18.0515 41.1021 15.209 37.5854 12.3716C37.2466 12.1012 36.8262 11.8943 36.3809 11.9412C35.7612 11.9844 35.3169 12.468 34.856 12.8274C28.9995 17.5525 23.1431 22.2777 17.2842 26.9991C16.896 27.3254 16.4492 27.6034 16.1582 28.03C15.7319 28.6813 15.9448 29.636 16.5898 30.0651C16.9478 30.3265 17.4077 30.3456 17.834 30.3469C18.7227 30.3456 19.6113 30.3317 20.5 30.3456C20.5063 36.4304 20.5063 42.5154 20.5 48.6002C18.8535 50.1312 17.3096 51.7715 15.7051 53.3457C12.7725 56.2581 9.87793 59.2084 6.92383 62.0991C5.22021 60.389 4.17773 58.0696 4 55.6638L4 9.33618C4.19287 6.63843 5.49023 4.03711 7.58252 2.31311C9.12891 0.995361 11.0918 0.248779 13.0962 0Z"
            fill={colors[props.pageColor].footerTriangle[0]}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M59.4844 2L13.2251 2Q10.9497 2.30713 9.31396 3.495Q9.07764 3.66663 8.85449 3.85657Q7.66602 4.83606 6.9668 6.08887Q6.14502 7.56116 6 9.41089L6 55.5865Q6.12793 57.1597 6.7666 58.4869Q6.92041 58.8068 7.104 59.1123Q8.6416 57.5872 10.8726 55.3492Q13.1499 53.0645 14.3047 51.918Q14.895 51.3387 16.0693 50.1519Q17.5386 48.6665 18.5005 47.7401L18.5044 41.7833L18.501 32.3442Q18.0713 32.3466 17.8281 32.3469Q16.3525 32.3425 15.4536 31.7109Q14.0449 30.7637 13.7993 29.5758Q13.5483 28.3647 14.5059 26.9036Q14.8984 26.3274 15.7485 25.6663Q15.9268 25.5275 16.0288 25.4424L33.6265 11.25Q33.687 11.2029 33.8354 11.0785Q35.0718 10.0441 36.2021 9.9491Q36.562 9.91443 36.9121 9.95593Q37.9131 10.0746 38.8403 10.8145L48.0142 18.2083Q48.0518 18.1704 48.0894 18.1322Q48.5366 17.6804 48.7573 17.4623L53.6523 12.5687L58.5273 7.69495Q59.313 6.9021 60.8906 5.3313Q62.1685 4.0592 63.1167 3.10352Q62.666 2.83118 62.186 2.625Q60.9326 2.08618 59.4844 2ZM64.54 1.65735C65.0352 1.98279 65.5024 2.35156 65.9336 2.75977C65.9897 2.81287 66.0454 2.8667 66.1006 2.92114C64.0781 5.0083 61.9946 7.03699 59.9482 9.10254C56.6895 12.3601 53.4307 15.619 50.1714 18.8767C49.4951 19.5444 48.8423 20.2375 48.1401 20.8787C44.6147 18.0515 41.1021 15.209 37.5854 12.3716C37.2466 12.1012 36.8262 11.8943 36.3809 11.9412C35.7612 11.9844 35.3169 12.468 34.856 12.8274C28.9995 17.5525 23.1431 22.2777 17.2842 26.9991C16.896 27.3254 16.4492 27.6034 16.1582 28.03C15.7319 28.6813 15.9448 29.636 16.5898 30.0651C16.9478 30.3265 17.4077 30.3456 17.834 30.3469C18.1118 30.3464 18.3896 30.3448 18.667 30.3433L18.6675 30.3433C19.2783 30.3396 19.8892 30.3361 20.5 30.3456Q20.5029 33.1566 20.5044 35.9675Q20.5049 37.7202 20.5049 39.4729Q20.5049 44.0365 20.5 48.6002C18.8535 50.1312 17.3096 51.7715 15.7051 53.3457C12.7725 56.2581 9.87793 59.2084 6.92383 62.0991C6.88232 62.0577 6.8418 62.016 6.80127 61.9739C6.37598 61.5314 5.99365 61.0503 5.6582 60.5392C4.70654 59.09 4.12842 57.3994 4 55.6638L4 9.33618C4.19287 6.63843 5.49023 4.03711 7.58252 2.31311C9.12891 0.995361 11.0918 0.248779 13.0962 0L59.5405 0C61.3198 0.0958252 63.0562 0.682373 64.54 1.65735Z"
            fill="#FFFFFF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
          <path
            id="Vector"
            d="M66.1006 2.92114C67.7456 4.51184 68.7168 6.70691 69 8.96289L69 56.0371C68.7485 57.9718 68.0186 59.8608 66.7583 61.3652C65.1128 63.4105 62.6323 64.6914 60.0386 65L12.9629 65C10.7085 64.7168 8.51221 63.7444 6.92383 62.0991C9.87793 59.2084 12.7725 56.2579 15.7051 53.3457C17.3101 51.7715 18.8535 50.1312 20.5 48.6001C20.5205 49.6234 20.4736 50.6479 20.5205 51.6699C20.5522 52.49 21.3442 53.1196 22.1455 53.0651C31.4575 53.0702 40.771 53.0613 50.083 53.0688C50.7505 53.0664 51.543 53.1577 52.0469 52.6169C52.585 52.1117 52.4976 51.322 52.5 50.653C52.4951 43.8838 52.4937 37.1147 52.5 30.3456C53.4751 30.3278 54.4502 30.3557 55.4248 30.3405C55.8896 30.3456 56.3706 30.1881 56.6782 29.8263C57.1616 29.3046 57.1948 28.4272 56.7339 27.8801C56.396 27.4941 55.9658 27.2085 55.5747 26.8823C53.0981 24.8789 50.6108 22.8883 48.1406 20.8787C48.8423 20.2375 49.4951 19.5444 50.1719 18.8766C53.4307 15.619 56.6895 12.3601 59.9482 9.10254C61.9946 7.03699 64.0781 5.0083 66.1006 2.92114Z"
            fill={colors[props.pageColor].footerTriangle[1]}
            fill-opacity="1.000000"
            fill-rule="nonzero"
          />
          <path
            id="Vector"
            d="M67 9.09326L67 55.9022Q66.6895 58.0973 65.5376 59.6809Q65.3882 59.886 65.2251 60.0807Q64.3809 61.13 63.3042 61.8135Q61.8276 62.7507 59.9146 63L13.0933 63Q11.3066 62.7552 9.92822 61.9451Q11.4731 60.4127 13.7056 58.1731Q15.9751 55.896 17.1143 54.7648Q17.6958 54.1945 18.8281 53.0507Q19.1382 53.7075 19.7603 54.2286Q20.354 54.7261 21.0356 54.9292Q21.5898 55.0944 22.2017 55.0651L36.1123 55.066L50.0825 55.0688Q50.1582 55.0686 50.3169 55.0708Q52.3525 55.0991 53.3965 54.0956Q53.4307 54.0627 53.4639 54.0289Q53.4907 54.0022 53.5176 53.9746Q54.5278 52.9292 54.5015 50.8826Q54.4995 50.7273 54.5 50.6605L54.4961 36.6602L54.499 32.3444Q55.0806 32.3457 55.4326 32.3406Q56.4634 32.3456 57.2505 31.91Q57.7627 31.6266 58.1719 31.1566Q59.1953 30.0378 59.2197 28.8979Q59.2437 27.7555 58.2637 26.5918Q57.8755 26.1475 57.1558 25.5854Q56.9458 25.4214 56.856 25.3467L51.1436 20.7332Q51.4189 20.4556 51.5767 20.3002L56.4712 15.4067L61.3623 10.5168Q62.145 9.72681 63.7129 8.16614Q64.9922 6.89246 65.9473 5.92981Q66.7559 7.30859 67 9.09326ZM69 8.96289C68.8008 7.37268 68.2593 5.81287 67.3809 4.47363C67.0166 3.91809 66.5942 3.40063 66.1143 2.93457L66.1006 2.92114C64.0781 5.0083 61.9946 7.03699 59.9482 9.10254C56.6895 12.3601 53.4307 15.619 50.1719 18.8766C49.9727 19.0729 49.7759 19.2714 49.5796 19.47C49.1069 19.9474 48.6362 20.426 48.1406 20.8787C48.6626 21.3035 49.1855 21.7275 49.709 22.1509C51.6621 23.7305 53.6216 25.3025 55.5747 26.8823C55.9658 27.2085 56.396 27.4941 56.7339 27.8801C57.1948 28.4272 57.1616 29.3046 56.6782 29.8263C56.3706 30.1881 55.8896 30.3456 55.4248 30.3405C54.9517 30.3479 54.478 30.3451 54.0044 30.3423L54.0039 30.3423C53.5029 30.3394 53.0015 30.3364 52.5 30.3456C52.4937 37.1147 52.4951 43.8838 52.5 50.653C52.4995 50.7363 52.501 50.8217 52.502 50.908C52.5098 51.5144 52.5181 52.1747 52.0469 52.6169C51.6074 53.0885 50.9487 53.0793 50.3447 53.071C50.2559 53.0698 50.1685 53.0686 50.083 53.0688C45.0386 53.0648 39.9937 53.0654 34.9492 53.0662L34.9326 53.0662C30.6699 53.0668 26.4077 53.0674 22.1455 53.0651C21.3442 53.1196 20.5522 52.49 20.5205 51.6699C20.5161 51.5695 20.5122 51.469 20.5093 51.3685C20.4946 50.8733 20.4985 50.3774 20.502 49.8816C20.5054 49.4545 20.5088 49.0272 20.5 48.6001C19.8198 49.2328 19.1567 49.8842 18.5 50.5417C17.5674 51.4755 16.647 52.422 15.7051 53.3457C12.7725 56.2579 9.87793 59.2084 6.92383 62.0991C6.95117 62.1274 6.97852 62.1555 7.00635 62.1836C7.45361 62.6343 7.94678 63.0331 8.47461 63.3795C9.81348 64.2583 11.3735 64.8004 12.9629 65L60.0386 65C62.6323 64.6914 65.1128 63.4105 66.7583 61.3652C68.0186 59.8608 68.7485 57.9718 69 56.0371L69 8.96289Z"
            fill="#FFFFFF"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </g>
        <path
          id="Vector"
          d="M38.3018 30.748C40.8735 28.1975 43.4038 25.6039 46.0024 23.0801C47.7139 24.4728 49.4619 25.8248 51.144 27.2531C50.2871 27.2556 49.4277 27.8967 49.4556 28.8082C49.4404 35.8782 49.458 42.947 49.4468 50.017C47.291 50.0221 45.1343 50.0208 42.9771 50.017C42.9697 45.3185 42.9785 40.6187 42.9736 35.9202C42.9951 35.3628 42.7271 34.7941 42.2383 34.5084C41.7725 34.2303 41.209 34.29 40.6895 34.2799C38.7334 34.2761 36.7769 34.3002 34.8218 34.2684C35.9438 33.0586 37.1465 31.9261 38.3018 30.748Z"
          fill={colors[props.pageColor].footerTriangle[1]}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M46.1333 25.7533Q44.7285 27.1407 42.644 29.234Q40.6934 31.1927 39.7295 32.1483Q39.6689 32.2102 39.5996 32.2803Q40.2886 32.2792 40.7285 32.2803Q40.7944 32.2815 40.9526 32.281Q41.5288 32.2791 41.8774 32.3245Q42.6504 32.4253 43.2476 32.7816Q43.4189 32.8817 43.5762 33.0004Q43.8247 33.1876 44.0381 33.421Q44.1387 33.5311 44.2295 33.6492Q44.4302 33.91 44.5815 34.2089Q44.793 34.6267 44.8911 35.0697Q44.9858 35.4989 44.9736 35.9518L44.9746 42.9658L44.9766 48.0171L47.4473 48.017L47.4497 39.4144L47.4556 28.8319Q47.4478 28.4319 47.5303 28.0516Q47.6123 27.6753 47.7827 27.3184Q47.8247 27.2308 47.8711 27.1462Q47.3638 26.7374 46.5703 26.1031Q46.3408 25.9196 46.1333 25.7533ZM49.3013 25.7305C49.9209 26.2317 50.5371 26.7374 51.144 27.2531C50.397 27.2552 49.6479 27.7427 49.4868 28.4716C49.4629 28.5789 49.4521 28.6913 49.4556 28.8082C49.4478 32.5597 49.4487 36.3108 49.4502 40.0619L49.4502 40.0634C49.4512 43.3811 49.4521 46.6989 49.4468 50.017L49.4463 50.017C47.291 50.0221 45.1348 50.0208 42.978 50.017L42.9771 50.017C42.9731 47.4719 42.9736 44.9265 42.9746 42.3811C42.9751 40.2273 42.9756 38.0736 42.9736 35.9202C42.9951 35.3628 42.7271 34.7941 42.2383 34.5084C41.8521 34.278 41.3989 34.2795 40.9595 34.281C40.8687 34.2814 40.7783 34.2816 40.6895 34.2799C40.0376 34.2786 39.3853 34.2804 38.7329 34.2822L38.7329 34.2822C38.3516 34.2833 37.9702 34.2844 37.5884 34.2849C36.666 34.286 35.7437 34.2834 34.8218 34.2684C35.4517 33.5896 36.1064 32.9352 36.7637 32.2834C37.2783 31.7734 37.7944 31.2651 38.3018 30.748C40.8735 28.1975 43.4038 25.6039 46.0024 23.0801C47.0962 23.97 48.2046 24.8433 49.3013 25.7305Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Vector"
          d="M33.0771 37.3306C35.3589 37.3293 37.6411 37.328 39.9229 37.3306C39.9326 41.5593 39.9277 45.7882 39.9253 50.017C37.6411 50.0208 35.3589 50.0208 33.0747 50.017C33.0708 45.7882 33.0659 41.5593 33.0771 37.3306Z"
          fill={colors[props.pageColor].footerTriangle[1]}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M33.0771 37.3306C35.3589 37.3293 37.6411 37.328 39.9229 37.3306L39.9229 37.3307C39.9312 40.9558 39.9287 44.5809 39.9263 48.2061C39.9258 48.8096 39.9258 49.4131 39.9253 50.0166L39.9253 50.017C37.6411 50.0208 35.3589 50.0208 33.0747 50.017C33.0747 49.7146 33.0742 49.4124 33.0737 49.11C33.0703 45.1835 33.0669 41.2571 33.0771 37.3306ZM35.0747 39.3297L35.0703 43.136L35.0732 48.0187L36.498 48.0199L37.9263 48.0187L37.9268 47.6072L37.9287 42.9929L37.9248 39.3297L36.4976 39.3291L35.0747 39.3297Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
        <path
          id="Vector"
          d="M25.5439 43.5068C27.0391 42.0342 28.4878 40.5133 30.0151 39.0736C30.0391 42.7209 30.0225 46.3683 30.0225 50.017C27.8657 50.0221 25.71 50.0208 23.5532 50.017C23.5557 48.4644 23.5342 46.9104 23.5635 45.3578C24.3096 44.8385 24.8901 44.1301 25.5439 43.5068Z"
          fill={colors[props.pageColor].footerTriangle[1]}
          fill-opacity="1.000000"
          fill-rule="nonzero"
        />
        <path
          id="Vector"
          d="M28.022 41.0223C28.6782 40.3644 29.3389 39.7111 30.0151 39.0736C30.021 39.9983 30.0249 40.923 30.0264 41.8477C30.0298 43.5166 30.0278 45.1857 30.0254 46.8549C30.0239 47.9088 30.0225 48.9629 30.0225 50.017C28.5327 50.0205 27.043 50.021 25.5532 50.0197C25.1152 50.0193 24.6772 50.0188 24.2393 50.0181C24.0107 50.0177 23.7817 50.0173 23.5532 50.017C23.5532 49.954 23.5532 49.8909 23.5532 49.8278C23.5537 49.3909 23.5522 48.9539 23.5508 48.5167C23.5469 47.4637 23.5435 46.4104 23.5635 45.3578C24.3096 44.8385 24.8901 44.1301 25.5439 43.5068C26.377 42.6862 27.1958 41.8506 28.022 41.0223ZM28.022 43.8599Q27.3418 44.543 26.9238 44.9543Q26.75 45.1202 26.3867 45.4938Q25.917 45.9775 25.6538 46.2238Q25.603 46.2714 25.5522 46.3175Q25.5474 47.0349 25.5493 48.019L26.7832 48.0203L28.0225 48.019L28.022 43.8599Z"
          fill="#FFFFFF"
          fill-opacity="1.000000"
          fill-rule="evenodd"
        />
      </svg>

      {props.hideFooterTriangle ?? (
        <svg
          width="255"
          height="646"
          viewBox="0 0 255 646"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="big-ocean-triangle"
        >
          <path
            d="M-37.0854 749.18L334.065 -51.4408L506.033 -103.48V733.329L-37.0854 749.18Z"
            fill="url(#paint0_linear_58_254)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_58_254"
              x1="280.501"
              y1="-420.494"
              x2="302.148"
              y2="704.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color={colors[props.pageColor].footerTriangle[0]} />
              <stop
                offset="1"
                stop-color={colors[props.pageColor].footerTriangle[1]}
              />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
};

export default FooterInfo;
