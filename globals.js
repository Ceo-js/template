

const 
   $ = v => document.querySelector( v ),
   $$ = v => document.querySelectorAll( v ),
   _ = ( ...args ) => console.log( ...args ),
   _e = ( ...args ) => console.error( ...args )
;

let
   ico_ceo = `
      <svg 
         version="1.0" 
         xmlns="http://www.w3.org/2000/svg" 
         viewBox="0 0 4080.000000 4080.000000"
         width="100%"
         height="100%"
         preserveAspectRatio="xMidYMid meet">
         <!-- width="4080.000000pt" 
         height="4080.000000pt"  -->

         <!-- [ gradients ] 
         ==================================================================== -->
         <defs>
            <linearGradient id="gradient1">
                  <stop offset="0%" stop-color="red"/>
                  <stop offset="100%" stop-color="red" stop-opacity="0" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#900;" />
                  <stop offset="100%" style="stop-color:#f00;" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f8f8f8;stop-opacity:0.5" />
                  <stop offset="50%" style="stop-color:#fc00ff;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#f8f8f8;stop-opacity:0.5" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient-golden" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#f05729;" />
                  <stop offset="50%" style="stop-color:#d9d9d9;" />
                  <stop offset="100%" style="stop-color:#f05729;" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#a15000;" />
                  <stop offset="100%" style="stop-color:#ff9e00;" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient-dourado" x1="0%" y1="100%" x2="10%" y2="-30%">
                  <stop offset="10%" style="stop-color:#634f2c;" />
                  <stop offset="22%" style="stop-color:#cfc09f;" />
                  <stop offset="26%" style="stop-color:#cfc09f;" />
                  <stop offset="40%" style="stop-color:#ffecb3;" />
                  <stop offset="68%" style="stop-color:#3a2c0f;" />
            </linearGradient>
         </defs>
         <defs>
            <linearGradient id="gradient-dourado1" x1="0%" y1="100%" x2="10%" y2="-30%">
                  <stop offset="10%" style="stop-color:#634f2c;" />
                  <stop offset="22%" style="stop-color:#cfc09f;" />
                  <stop offset="24%" style="stop-color:#634f2c;" />
                  <stop offset="26%" style="stop-color:#cfc09f;" />
                  <stop offset="27%" style="stop-color:#634f2c;" />
                  <stop offset="40%" style="stop-color:#ffecb3;" />
                  <stop offset="68%" style="stop-color:#3a2c0f;" />
            </linearGradient>
         </defs>
         <defs>
            <filter id="shadow">
            <feDropShadow dx="0" dy="-550" flood-color="#00000050" stdDeviation="150"></feDropShadow>
            </filter>
         </defs>
         <!-- ================================================================ -->
         
         <!-- <g 
            transform="translate(0.000000,4080.000000) scale(0.100000,-0.100000)"
            fill="#1b1d22" 
            stroke="none">
            <path 
               class="fundo"
               d="M0 20400 l0 -20400 20400 0 20400 0 0 20400 0 20400 -20400 0 -20400 0 0 -20400z"
               /> -->
         </g>
         <g 
            transform="translate(0.000000,4080.000000) scale(0.100000,-0.100000)"
            fill="url(#gradient2)" 
            filter="url(#shadow)"
            stroke="none">
            <path 
               class="C"
               d="M18260 34084 c-30 -2 -140 -8 -245 -14 -1603 -90 -3234 -486 -4740 -1153 -1327 -587 -2539 -1377 -3655 -2381 -187 -168 -758 -739 -926 -926 -884 -982 -1566 -1984 -2138 -3140 -754 -1522 -1214 -3156 -1365 -4846 -42 -459 -46 -577 -46 -1229 0 -652 4 -770 46 -1229 188 -2109 865 -4145 1977 -5956 435 -708 938 -1377 1526 -2030 168 -187 739 -758 926 -926 982 -884 1984 -1566 3140 -2138 1522 -754 3156 -1214 4846 -1365 459 -42 577 -46 1229 -46 652 0 770 4 1229 46 2109 188 4145 865 5956 1977 708 435 1377 938 2030 1526 187 168 758 739 926 926 752 835 1358 1686 1880 2640 l101 185 -961 6 c-1095 7 -1108 8 -1271 74 -47 20 -108 36 -150 40 -38 4 -103 16 -144 26 -41 11 -75 18 -76 17 -1 -2 -35 -52 -75 -113 -123 -184 -228 -332 -359 -505 -111 -146 -365 -467 -381 -480 -3 -3 -60 -68 -125 -145 -152 -176 -213 -242 -460 -494 -434 -441 -820 -780 -1295 -1137 -546 -410 -1121 -765 -1740 -1074 -249 -125 -634 -301 -720 -330 -14 -5 -63 -25 -110 -45 -47 -20 -128 -52 -180 -71 -52 -20 -124 -47 -159 -61 -81 -31 -606 -203 -731 -239 -255 -72 -352 -98 -535 -143 -513 -124 -1252 -242 -1695 -271 -85 -6 -211 -15 -279 -20 -161 -13 -1191 -13 -1352 0 -68 5 -194 14 -279 20 -310 20 -885 101 -1255 176 -400 81 -588 127 -985 241 -120 34 -645 206 -721 236 -35 14 -107 41 -159 61 -52 19 -133 51 -180 71 -47 20 -96 40 -110 45 -152 51 -777 350 -1085 520 -857 471 -1638 1035 -2312 1669 -286 270 -616 610 -818 846 -65 77 -122 142 -125 145 -16 13 -271 335 -384 483 -123 163 -335 464 -406 577 -19 30 -42 66 -53 80 -40 55 -256 406 -318 519 -13 23 -31 55 -39 69 -161 285 -307 574 -449 887 -128 284 -121 268 -157 355 -26 63 -36 88 -91 230 -71 184 -171 459 -188 520 -7 25 -22 70 -33 100 -36 100 -146 481 -196 675 -156 611 -283 1367 -317 1880 -5 83 -14 206 -19 274 -13 161 -13 1191 0 1352 5 68 14 192 19 274 34 513 161 1269 317 1880 50 194 160 575 196 675 11 30 26 75 33 100 17 61 117 336 188 520 55 142 65 167 91 230 36 87 29 71 157 355 142 313 288 602 449 887 8 14 26 46 39 69 62 113 278 464 318 519 11 14 34 50 53 80 71 113 283 414 406 577 113 148 368 470 384 483 3 3 60 68 125 145 152 176 213 242 460 494 434 441 820 780 1295 1137 546 410 1121 765 1740 1074 249 125 634 301 720 330 14 5 63 25 110 45 47 20 128 52 180 71 52 20 124 47 159 61 76 30 601 202 721 236 397 114 585 160 985 241 370 75 945 156 1255 176 85 6 211 15 279 20 68 6 372 10 676 10 304 0 608 -4 676 -10 68 -5 194 -14 279 -20 443 -29 1182 -147 1695 -271 183 -45 280 -71 535 -143 125 -36 650 -208 731 -239 35 -14 107 -41 159 -61 52 -19 133 -51 180 -71 47 -20 96 -40 110 -45 152 -51 777 -350 1085 -520 207 -114 472 -268 575 -335 19 -12 82 -53 140 -90 58 -38 134 -88 171 -111 62 -42 69 -44 137 -44 39 0 116 9 170 19 530 103 939 490 1077 1022 36 138 46 393 21 537 -18 106 -74 281 -114 362 -31 61 -63 85 -382 284 -1519 947 -3231 1593 -4995 1885 -466 77 -842 120 -1405 162 -136 10 -1299 21 -1420 13z"
               />
         </g> 
         <g 
            transform="translate(0.000000,4080.000000) scale(0.100000,-0.100000)"
            fill="url(#gradient4)" 
            filter="url(#shadow)"
            stroke="none">
            <path 
               class="O"
               d="M28827 25164 c-1978 -154 -3783 -1274 -4804 -2984 -465 -777 -749 -1634 -843 -2543 -29 -285 -29 -957 0 -1245 126 -1231 609 -2380 1403 -3333 935 -1124 2262 -1885 3710 -2129 389 -65 518 -75 1022 -75 493 0 580 6 945 61 863 132 1707 456 2445 941 1294 850 2223 2157 2599 3658 75 298 135 661 161 963 20 248 20 828 0 1069 -157 1817 -1115 3476 -2610 4521 -909 635 -1962 1012 -3065 1097 -237 18 -725 18 -963 -1z m864 -1844 c331 -32 606 -86 899 -177 883 -273 1629 -800 2196 -1549 375 -498 656 -1134 774 -1754 65 -342 65 -348 65 -825 0 -409 -2 -450 -23 -589 -81 -523 -209 -932 -432 -1371 -594 -1171 -1705 -2016 -2990 -2275 -315 -63 -492 -80 -860 -80 -489 0 -802 44 -1245 177 -1005 300 -1873 966 -2433 1867 -314 504 -520 1082 -608 1701 -27 189 -28 960 -1 1140 114 770 386 1432 835 2030 129 171 219 274 406 460 409 408 869 716 1398 934 406 167 771 257 1258 310 109 12 641 13 761 1z"
               />
         </g>
         <g 
            transform="translate(0.000000,4080.000000) scale(0.100000,-0.100000)"
            fill="url(#gradient-dourado)" 
            filter="url(#shadow)"
            stroke="none">
            <path 
               class="E"
               d="M19450 29769 c8 -5 80 -48 160 -95 968 -574 1579 -1202 1735 -1786 30 -110 50 -289 41 -353 l-7 -45 -5150 0 c-3426 0 -5149 -3 -5149 -10 0 -5 8 -10 18 -10 33 0 211 -60 390 -132 716 -285 1407 -733 2044 -1325 148 -137 402 -401 525 -544 l40 -46 6 -234 c15 -509 6 -4050 -21 -8765 l-7 -1170 -29 -35 c-95 -114 -365 -393 -511 -529 -637 -593 -1330 -1042 -2047 -1328 -179 -72 -357 -132 -390 -132 -10 0 -18 -4 -18 -10 0 -7 1801 -10 5384 -10 l5385 0 -73 -152 c-657 -1372 -985 -3244 -940 -5361 5 -216 10 -378 11 -362 2 17 7 210 13 430 11 480 30 676 101 1100 189 1118 583 2067 1157 2787 127 160 415 451 567 572 162 130 419 297 563 367 375 181 563 277 707 359 1492 852 2662 2119 3404 3688 315 666 555 1389 720 2170 53 246 88 535 62 507 -4 -6 -45 -92 -91 -192 -555 -1226 -1590 -2376 -2962 -3290 -501 -334 -1054 -644 -1608 -901 l-156 -72 -3151 0 c-1733 0 -3153 3 -3155 8 -1 4 -34 17 -73 30 -104 35 -201 96 -286 181 -87 88 -147 183 -184 295 l-26 78 0 1968 0 1968 26 77 c65 195 200 347 390 443 134 67 -10 62 1893 62 l1724 0 86 -59 c312 -214 603 -506 766 -770 357 -578 349 -1221 -22 -1861 -26 -44 -25 -44 34 20 427 455 691 953 759 1431 16 117 19 367 5 475 -5 39 -42 171 -84 295 -165 495 -257 935 -311 1494 -59 602 45 1112 306 1505 81 123 290 332 415 417 164 111 380 213 549 259 140 38 212 54 243 54 17 0 32 4 32 10 0 10 -482 7 -575 -5 -560 -68 -930 -211 -1262 -489 -144 -119 -221 -209 -298 -341 -159 -278 -332 -538 -508 -762 l-72 -92 -1758 -1 -1758 0 -77 26 c-110 36 -206 96 -293 183 -87 88 -147 183 -184 295 l-27 79 0 1617 0 1617 27 78 c65 195 200 347 390 443 138 69 -118 63 2835 62 l2665 -1 160 -64 c727 -290 1360 -656 1810 -1046 204 -177 395 -381 515 -549 29 -41 57 -79 61 -84 13 -14 -48 202 -94 339 -530 1556 -1462 2889 -2707 3866 -763 599 -1679 1083 -2519 1330 -135 39 -169 46 -141 28z"
               />
         </g>
      </svg>
   `,
   Links = [
      l0 = {
         icon: `
            <svg ico viewBox="0 -129 1282 1282" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
               <path d="M346.975207 294.505785l42.314049 88.859504a26.234711 26.234711 0 0 1-12.694215 35.543802L368.978512 423.140496q-132.019835 18.618182-138.790082 84.628099c0 32.158678 161.639669 162.48595 169.256198 229.342149a234.419835 234.419835 0 0 1 0 102.4q-46.545455 121.864463-274.195041 160.793388a26.234711 26.234711 0 0 1-25.38843-10.155372l-7.616529-10.155372-52.469421-79.550413-9.309091-11.847934a26.234711 26.234711 0 0 1 5.077686-37.236363h8.46281q169.256198-49.930579 161.639669-65.163637c-5.923967-28.773554-236.112397-190.413223-169.256198-338.512396a365.593388 365.593388 0 0 1 286.889256-169.256199 26.234711 26.234711 0 0 1 23.695868 16.079339zM1227.107438 454.452893l19.464463 41.467768a26.234711 26.234711 0 0 1-12.694215 35.543802h-5.923967q-76.165289 14.386777-80.396694 55.854545c0 21.157025 105.785124 106.631405 110.016529 149.791736a153.17686 153.17686 0 0 1 0 66.856198q-29.619835 78.704132-174.333885 104.938843a26.234711 26.234711 0 0 1-25.388429-10.155372l-33.85124-51.62314a24.542149 24.542149 0 0 1 5.077686-33.85124h7.616529q99.014876-30.466116 96.476033-39.775207c0-18.618182-154.869421-125.249587-112.555372-220.033057a236.112397 236.112397 0 0 1 181.104132-109.170248 26.234711 26.234711 0 0 1 25.38843 10.155372z" fill="#5D9CEC" />
               <path d="M484.919008 366.439669m-84.628099 0a84.628099 84.628099 0 1 0 169.256198 0 84.628099 84.628099 0 1 0-169.256198 0Z" fill="#5D9CEC" />
               <path d="M406.214876 445.143802l157.408264 0 0 472.224793-157.408264 0 0-472.224793Z" fill="#5D9CEC" />
               <path d="M652.482645 423.140496H677.024793a26.234711 26.234711 0 0 1 24.542149 16.92562l84.628099 204.8a6.770248 6.770248 0 0 0 8.46281 0l95.629752-192.952066a26.234711 26.234711 0 0 1 23.695868-14.386777h6.770248a26.234711 26.234711 0 0 1 26.234711 21.157025l98.168595 503.53719a26.234711 26.234711 0 0 1-21.157025 31.312396h-103.246281a26.234711 26.234711 0 0 1-26.234711-22.003305l-17.771901-101.553719a6.770248 6.770248 0 0 0-12.694214 0l-41.467769 101.553719a26.234711 26.234711 0 0 1-24.542149 16.079338h-17.771901a26.234711 26.234711 0 0 1-24.542148-16.925619l-37.236364-99.014877a6.770248 6.770248 0 0 0-12.694215 0l-18.618182 100.707439a26.234711 26.234711 0 0 1-26.23471 22.003305H564.469421a26.234711 26.234711 0 0 1-26.23471-30.466115l84.628099-517.923967A26.234711 26.234711 0 0 1 652.482645 423.140496z" fill="#5D9CEC" />
               <path d="M873.361983 222.571901L1030.770248 0l166.717355 222.571901-166.717355 221.72562-157.408265-221.72562z" fill="#9AD05F" />
            </svg>`,
         link: "https://google.com",
         title: "Arquitetura de Computadores",
         submenu: "01 - Arquitetura de Computadores"
      },
      l1 = {
         icon: `
         <svg ico viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M209.11128 258.0742c20.523667-7.860128 148.469083 191.699787 299.121535 191.699787s267.681023-206.110021 283.837953-195.193177-65.501066 208.730064-54.147548 279.034542c20.523667 145.849041 118.338593 102.181663 127.072069 288.204691 3.49339 80.347974-74.671215 205.236674-364.185928 201.743283S158.893796 906.098081 158.893796 822.256716c0-151.089126 80.784648-131.002132 105.675053-289.951386 10.480171-66.374414-72.92452-262.440938-55.457569-274.23113z" fill="#434A54" />
            <path d="M660.195289 596.496375H566.310427V134.058849a43.667377 43.667377 0 0 0 40.610661-43.667378V43.667377a43.667377 43.667377 0 0 0-43.667377-43.667377H458.888679a43.667377 43.667377 0 0 0-43.667378 43.667377v48.470789a43.667377 43.667377 0 0 0 40.610661 43.667378v460.690831h-87.334754a20.960341 20.960341 0 0 0-20.960341 20.960341v229.690406a20.960341 20.960341 0 0 0 20.960341 20.960341h292.134754a20.960341 20.960341 0 0 0 22.270363-20.960341v-229.690406a20.960341 20.960341 0 0 0-22.707036-20.960341z" fill="#D46882" />
            <path d="M423.518103 653.70064l189.953092 0 0 67.684435-189.953092 0 0-67.684435Z" fill="#E6E9ED" />
            <path d="M423.518103 755.882303l189.953092 0 0 67.684435-189.953092 0 0-67.684435Z" fill="#E6E9ED" />
         </svg>`,
         link: "",
         title: "",
         submenu: ""
      },
      l2 = {
         icon: `
         <svg viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M524 524m-453.544 0a453.544 453.544 0 1 0 907.088 0 453.544 453.544 0 1 0-907.088 0Z" fill="#656464" />
            <path d="M967.944 441.336a1671.336 1671.336 0 0 1-99.0624-29.696c-28.0848-9.376-43.7456-30.288-45.2608-59.8336a1787.2512 1787.2512 0 0 1-2.328-102.3216c0.12-20.4336 7.1632-37.0784 20.6144-48.9232-50.0736-49.2224-111.5136-86.9008-180.0352-108.7424-3.9664 6.3024-9.208 12.176-15.6912 17.5504a1788.7648 1788.7648 0 0 1-80.6464 63.0176c-23.8256 17.544-49.9264 18.6704-74.9712 2.8816a1672.632 1672.632 0 0 1-85.728-57.84c-9.7552-7.0304-17.0304-15.312-21.6992-24.6336-65.0048 21.224-123.5648 56.704-171.9392 102.7984 8.6192 10.9584 13.1264 24.816 13.224 41.0944 0.2 34.1056-0.576 68.2592-2.328 102.3216-1.5168 29.5472-17.1792 50.4576-45.264 59.8352a1672.512 1672.512 0 0 1-96.0976 28.8912 455.3024 455.3024 0 0 0-10.272 96.2656c0 77.1296 19.2768 149.7472 53.2384 213.3408 16.5088-13.7984 36.3184-18.528 58.3376-12.1888 34.1424 9.832 67.5456 22.1936 100.7024 34.9456 27.6432 10.632 42.3008 32.2752 42.4784 61.856 0.2 34.1056-0.576 68.2592-2.328 102.3216a84.8752 84.8752 0 0 1-0.5424 6.0464c60.7472 30.208 129.2096 47.2224 201.6528 47.2224 35.3184 0 69.696-4.04 102.6944-11.6784-7.2432-18.5792-5.0512-39.0176 5.864-58.4992 8.0736-14.3968 15.4064-29.2224 23.3104-43.7104 0 0 23.4256-41.616 24.7168-43.5312 14.776-22.5328 36.2208-33.7776 63.0112-30.328 35.2368 4.5328 70.1312 11.6848 104.84 19.2576 8.0528 1.7568 15.2064 4.544 21.4896 8.2304 67.1104-79.0784 107.6176-181.4432 107.6176-293.2848 0-28.056-2.5664-55.5104-7.4416-82.16-0.7216-0.1728-1.4336-0.312-2.1568-0.5056z m-300.8128 87.744c-11.1376 33.736-22.7312 67.4144-36.7536 100.0592-10.6592 24.8192-31.2496 37.5616-58.1664 38.8192-2.3088 0.1392-50.0528-0.8656-50.0528-0.8656-16.4992-0.5648-32.9888-1.7904-49.4944-2.1664-30.9632-0.7088-54.9744-16.7984-64.6032-46.0976-10.9664-33.3968-20.8048-67.2176-28.9664-101.4112-6.6832-27.992 2.5648-51.7488 25.7344-68.448a1670.8624 1670.8624 0 0 1 85.728-57.8384c25.0448-15.7904 51.1472-14.6624 74.9712 2.8816a1788.7312 1788.7312 0 0 1 80.6464 63.016c22.784 18.8768 30.2464 43.9296 20.9568 72.0512z" fill="#E6E9ED" />
         </svg>`,
         link: "",
         title: "",
         submenu: ""
      },
      l3 = {
         icon: `
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="1" d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z" fill="#292D32"/>
            <path d="M9.85953 19L11.5395 17.58C11.7895 17.37 12.2095 17.37 12.4695 17.58L14.1395 19C14.5295 19.2 15.0095 19 15.1495 18.58L15.4695 17.62C15.5495 17.39 15.4695 17.05 15.2995 16.88L13.6595 15.23C13.5395 15.11 13.4495 14.88 13.4495 14.72V12.87C13.4495 12.45 13.7595 12.25 14.1495 12.41L17.4995 13.85C18.0495 14.09 18.5095 13.79 18.5095 13.19V12.26C18.5095 11.78 18.1495 11.22 17.6995 11.03L13.7595 9.32999C13.5895 9.25999 13.4595 9.04999 13.4595 8.86999V6.79999C13.4595 6.11999 12.9595 5.31999 12.3595 5.00999C12.1395 4.89999 11.8895 4.89999 11.6695 5.00999C11.0595 5.30999 10.5695 6.11999 10.5695 6.79999V8.86999C10.5695 9.04999 10.4295 9.25999 10.2695 9.32999L6.32953 11.03C5.88953 11.22 5.51953 11.78 5.51953 12.26V13.19C5.51953 13.79 5.96953 14.09 6.52953 13.85L9.87953 12.41C10.2595 12.24 10.5795 12.45 10.5795 12.87V14.72C10.5795 14.89 10.4795 15.12 10.3695 15.23L8.69953 16.87C8.52953 17.04 8.44953 17.38 8.52953 17.61L8.84953 18.57C8.98953 19 9.45953 19.2 9.85953 19Z" fill="#1b1d22"/>
         </svg>`,
         link: "",
         title: "",
         submenu: ""
      },
      l4 = {
         icon: `
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="1" fill-rule="evenodd" fill="#006699" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224Z" />
            <path fill="#00384a" d="M15.5227 12C15.5227 13.6569 14.1694 15 12.4999 15C10.8304 15 9.47705 13.6569 9.47705 12C9.47705 10.3431 10.8304 9 12.4999 9C14.1694 9 15.5227 10.3431 15.5227 12Z" />
         </svg>`,
         link: "",
         title: "",
         submenu: ""
      },
      l5 = {
         icon: "",
         link: "",
         title: "",
         submenu: ""
      },
      l6 = {
         icon: "",
         link: "",
         title: "",
         submenu: ""
      },
      l7 = {
         icon: "",
         link: "",
         title: "",
         submenu: ""
      },
      l8 = {
         icon: "",
         link: "",
         title: "",
         submenu: ""
      },
   ]
   
;

// window.addEventListener( "load", () => {
addEventListener( "DOMContentLoaded", () => {
   _( "oi" );
   const 
      NavLinks = $$( "navlink" ),
      C = $$( "[c]" ),
      BG = $$( "[bg]" ),
      Pd = $$( "[pd]" ),
      Focus = $$( "img" ),
      tAs = $$( "[t-a]" ),
      OCs = $$( "oc" ),

      W = $$( "[w]" ),
      H = $$( "[h]" ),
      M = $$( "[m]" ),
      P = $$( "[p]" ),
      Fsz = $$( "[fsz]" ),
      Columns = $$( "[columns]" ),
      Rows = $$( "[rows]" ),
      Tabela = $$( "[tabela]" ),

      // DLink = $$( "d-link > a" ),
      start = $( "drawer-logo" )
   ;

   const 
      drawerHomeTemplate = `
      <style>
         drawer-logo {
            width: 100%;
            aspect-ratio: 1/1;
            margin: 2vw auto;
            display: grid;
            place-items: center;
         }
         drawer-logo > * {
            width: auto;
            border-radius: 55rem;
         }
         drawer-home {
            display: grid;
            gap: 5vw;
            justify-content: center;
            /* grid-template-rows: repeat( auto-fill, 48px); */
            padding: 2vw 0;
         }
         d-link {
            display: grid;
            place-items: center;
            width: 70%;
            margin: 0 auto;
            background: #313339;
            aspect-ratio: 1/1;
            border-radius: 55rem;
            overflow: hidden;
         }
         a {
            text-decoration: none;
            color: #eee;
         }
         d-link svg {
            display: block;
            width: 70%;
            height: 70%;
            margin: 0 auto;
         }
         sub-menu {
            background: #1d1e27;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            font-weight: bold;
            box-shadow: #00000050 3px 3px 6px;
            position: absolute;
            left: 100%;
            top: -10px;
            margin-top: 0;
            padding: 10px 20px;
            border-radius: 0 6px 6px 0;
            opacity: 0;
            display: block;
            pointer-events: none;
            transition: 0s;
         
         }
         drawer-home > *:hover sub-menu {
            position: absolute;
            top: 2vw; left: 50px;
            width: 100vw;
            padding: 4vw;
            opacity: 1;
            pointer-events: auto;
            transition: all 0.3s ease;
         }
         img {
            display: grid;
            width: 90%;
            margin: 0 auto;
         }
      </style>

      <drawer-logo>
         ${ico_ceo}
      </drawer-logo>
      <drawer-home>
         <d-link>
            <a href="${Links[0].link}" 
               title="${Links[0].title}" >
               ${Links[0].icon}
            </a>
            <sub-menu>
               ${Links[0].submenu}
            </sub-menu>
         </d-link>

         <d-link>
            <a href="${Links[1].link}"
               title="${Links[1].title}" >
               ${Links[1].icon}
            </a>
            <sub-menu>
               ${Links[1].submenu}
            </sub-menu>
         </d-link>

         <d-link>
            <a href="${Links[2].link}">
               ${Links[2].icon}
            </a>
            <sub-menu>
               ${Links[2].submenu}
            </sub-menu>
         </d-link>

         <d-link>
            <a href="${Links[3].link}">
               ${Links[3].icon}
            </a>
            <sub-menu>
               ${Links[3].submenu}
            </sub-menu>
         </d-link>

         <d-link>
            <a href="${Links[4].link}">
               ${Links[4].icon}
            </a>
            <sub-menu>
               ${Links[4].submenu}
            </sub-menu>
         </d-link>

         <!-- <d-link>
            <a href="./06 - Tipos de Memória.html">
               <small>MEM</small>
            </a>
            <sub-menu>06 - Tipos de Memória</sub-menu>
         </d-link>

         <d-link>
            <a href="./07 - Organização do Processador.html">
               <small>CPU</small>
            </a>
            <sub-menu>07 - Organização do Processador</sub-menu>
         </d-link>
         
         <d-link>
            <a href="./08 - Tipos de Barramentos.html">
               ${Links[0].icon}
            </a>
            <sub-menu>08 - Tipos de Barramentos</sub-menu>
         </d-link> -->
      </drawer-home>
      `
   ;




   NavLinks.forEach( link => link.addEventListener( "click", ev => {
      window.open( link.getAttribute( "to" ), "_blank" );
   } ) );



   C.forEach( c => c.style.color = c.getAttribute( "c" ) );
   BG.forEach( bg => bg.style.backgroundColor = bg.getAttribute( "bg" ) );
   Pd.forEach( pd => pd.style.padding = pd.getAttribute( "pd" ) );
   tAs.forEach( t => t.style.textAlign = t.getAttribute( "t-a" ) );


   /* 
   <oc>
      <>any</>
      <>any</>
   </oc>
   */
   OCs.forEach( o => o.addEventListener(
      "click", ev => {
         if( o.getAttribute( "open" ) == "" ) {
            o.removeAttribute( "open" );
            o.lastElementChild.style.visibility = "collapse";
            o.lastElementChild.style.height = "0";
         } else {
            o.setAttribute( "open", "" );
            o.lastElementChild.style.visibility = "visible";
            o.lastElementChild.style.height = "auto";
         }
      }
   ) );

   W.forEach( v => v.style.width = v.getAttribute( "w" ) );
   H.forEach( v => v.style.height = v.getAttribute( "h" ) );
   M.forEach( v => v.style.margin = v.getAttribute( "m" ) );
   P.forEach( v => v.style.padding = v.getAttribute( "p" ) );
   Fsz.forEach( v => v.style.fontSize = v.getAttribute( "fsz" ) );
   Columns.forEach( v => v.style.gridTemplateColumns = v.getAttribute( "columns" ) );
   Rows.forEach( v => v.style.gridTemplateRows = v.getAttribute( "rows" ) );
   Tabela.forEach( v => v.style.gridTemplateColumns = v.getAttribute( "tabela" ) );

   Focus.forEach( img => img.addEventListener( "click", ev => {
   } ) );

   /* == [ drawer links template ] == == == == == == == == == */
   class AppDrawer extends HTMLElement {
      constructor() {
         super();
         let drawer = document.createElement( "template" );
         drawer.innerHTML = drawerHomeTemplate;
         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( drawer.content.cloneNode( true ) );
         // this.shadowRoot.querySelector( "img" ).src = this.getAttribute( "src" );
         this.shadowRoot.querySelector( "img" ).alt = this.getAttribute( "alt" );
      } 
      connectedCallback() {
         this.render();
         // let 
         //    btn = this.shadowRoot.querySelector( "button" )
         // ;
         // btn.addEventListener( "click", ev => {
         //    cardBase.style.transform = "rotateY( 180deg )";
         // } );

         let DLink = this.shadowroot.querySelectorAll( "d-link > a" );
         DLink.forEach( d => { 
            // d.addEventListener( "touchstart", ev => {
            d.addEventListener( "dragstart", ev => {
               switch( d.innerText ) {
               case "01": {
                  d.title = "oi";
               }
                  break;
               }
            } );
         } );
      }
      render() {
      }
   }
   window.customElements.define( "app-drawer", AppDrawer );

   // DLink.forEach( d => { 
   //    // d.addEventListener( "touchstart", ev => {
   //    d.addEventListener( "dragstart", ev => {
   //       switch( d.innerText ) {
   //       case "01": {
   //          d.title = "oi";
   //       }
   //          break;
   //       }
   //    } );
   // } );

   start.addEventListener( "click", ev => {
      open( "./index.html", "_self" );
   } );
   start.addEventListener( "contextmenu", ev => {
      open( "https://www.youtube.com/playlist?list=PL866_LrQxNVipiEgWtJMK5Fcgc6IBfVvc", "_self" );
   } );

} );