(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{192:function(t,e,o){var content=o(194);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("0a59630b",content,!0,{sourceMap:!1})},193:function(t,e,o){"use strict";o(192)},194:function(t,e,o){var n=o(42)(!1);n.push([t.i,".Home[data-v-07b0f4d3],.Home section[data-v-07b0f4d3]{height:100%;display:block}.Home section[data-v-07b0f4d3]{position:relative;touch-action:pan-y;z-index:3}.Home section .buttonNextDiv[data-v-07b0f4d3]{position:absolute;right:30px;bottom:25px}.Home section .buttonNextDiv svg[data-v-07b0f4d3]:hover{transform:scale(1.2)}.Home .container[data-v-07b0f4d3]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100%;width:100%;position:relative;top:0;left:0;bottom:0;right:0}.Home .HomeHead .container[data-v-07b0f4d3]{justify-content:flex-end}.Home .HomeHead .container .HomeHead-title[data-v-07b0f4d3]{text-align:center;margin-bottom:18vh}.Home .HomeHead .container .HomeHead-title svg[data-v-07b0f4d3]{fill:#070e1d;width:800px;height:130px;display:block}.Home .HomeHead .container .HomeHead-title span[data-v-07b0f4d3]{display:inline-block;margin-top:47px;text-align:center;line-height:1;font-size:22px;font-family:Avenir-Light,Avenir;font-weight:300;color:#fff}.Home .HomeVideo .container[data-v-07b0f4d3]{visibility:hidden;opacity:0}.Home .HomeVideo .container .center[data-v-07b0f4d3]{display:flex;flex-direction:column;width:68%}.Home .HomeVideo .container .center .title[data-v-07b0f4d3]{font-size:50px;font-family:FakeIdentity;color:#fff;line-height:1;margin-bottom:20px;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,0 100%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.Home .HomeVideo .container .center .video-bg[data-v-07b0f4d3]{background:#000;padding:26px 28px;display:flex;align-items:center;justify-content:center;width:auto}.Home .HomeVideo .container .center .video-bg img[data-v-07b0f4d3]{width:100%}.Home .HomeIntro .container[data-v-07b0f4d3]{visibility:hidden;opacity:0}.Home .HomeOther[data-v-07b0f4d3]{display:flex;justify-content:center;align-items:center;position:relative;touch-action:pan-y;width:100%;height:100vh;background-position:50%;background-repeat:no-repeat;overflow:hidden;background-size:cover}.Home .HomeOther[data-v-07b0f4d3]:first-child{background-image:url(/img/bg01.png)}.Home .HomeOther[data-v-07b0f4d3]:nth-child(2){background-image:url(/img/bg02.png)}.Home .HomeOther[data-v-07b0f4d3]:nth-child(3){background-image:url(/img/bg03.png)}.Home .HomeOther[data-v-07b0f4d3]:nth-child(4){background-image:url(/img/bg04.png)}.Home .HomeOther[data-v-07b0f4d3]:nth-child(5){background-image:url(/img/bg05.png)}",""]),t.exports=n},197:function(t,e,o){"use strict";o.r(e);var n=o(195),r=o(196),l={name:"Index",data:function(){return{}},mounted:function(){n.a.registerPlugin(r.a),n.a.registerPlugin(SplitText),this.splitText(),this.scrollTriggerAnims(),r.a.addEventListener("refresh",(function(){document.documentElement.scrollTop=0}))},methods:{scrollTrigger:function(){},getPos:function(t,e){var o=t.getBoundingClientRect();return o.top+o.height*e},scrollTriggerAnims:function(){var t=n.a.timeline();t.fromTo(this.$refs.homeHeadTitleSVG,{y:"-=40%",opacity:1},{y:"+=50%",opacity:1,duration:.5});var e=new SplitText(this.$refs.homeHeadDesc,{type:"words,chars"}).chars;n.a.set(this.$refs.homeHeadDesc,{perspective:400}),t.from(e,{duration:.8,opacity:0,scale:0,y:80,rotationX:180,transformOrigin:"0% 50% -50",ease:"back",stagger:.01});var o=n.a.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".HomeHead",start:"top top",end:"bottom top",scrub:!0}}),l=new SplitText(this.$refs.homeVideoTitle,{type:"words,chars"}).chars;n.a.set(this.$refs.homeHeadDesc,{perspective:400});var d=n.a.timeline({paused:!0,defaults:{ease:"power1.out"}});d.to(".HomeVideo .container",{autoAlpha:1},0).from(l,{duration:.4,opacity:0,scale:0,y:80,rotationX:180,transformOrigin:"0% 50% -50",ease:"back",stagger:.01},.8).from(".HomeVideo .container .video-bg",{autoAlpha:0,scale:0,y:20,duration:.6},0),r.a.create({trigger:".HomeVideo",start:"-25% top",end:"bottom bottom",onEnter:function(t){var progress=t.progress;t.direction,t.isActive;console.log(progress),d.play()},onEnterBack:function(){d.reverse()}});var C=n.a.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".HomeIntro",start:"top top",end:"+=100%",scrub:!0}});o.fromTo(".HomeHead-title",{y:0,autoAlpha:1},{autoAlpha:0,y:-100,scale:1.2,duration:.5},0).fromTo(".buttonNextDiv",{y:0,autoAlpha:1},{y:0,autoAlpha:0,duration:.5},0),C.set(".HomeIntro .container",{autoAlpha:1},0).fromTo(".HomeIntro .container .title",{y:"-=40%",autoAlpha:0},{y:"0",autoAlpha:1,duration:.5}).fromTo(".HomeIntro .container .title",{y:"+=40%",autoAlpha:1},{y:0,autoAlpha:0,duration:.5}).to(".HomeVideo .container",{autoAlpha:0,stagger:.1,duration:.1})},splitText:function(){}}},d=(o(193),o(26)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"Home"},[o("section",{ref:"sectionHomeHead",staticClass:"HomeHead PageSection"},[o("div",{staticClass:"container"},[o("h1",{staticClass:"HomeHead-title"},[o("svg",{ref:"homeHeadTitleSVG",attrs:{width:"800px",height:"130px",viewBox:"0 0 800 130",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("defs",[o("path",{attrs:{id:"path-vxrei_cm19-1",d:"M246.148711,40.1606638 C264.222411,40.1606638 278.874039,54.8122919 278.874039,72.885991 L278.874039,88.8084395 C278.874039,100.124589 275.111501,109.676235 267.586426,117.463379 C260.061351,125.250523 250.844592,129.144095 239.936149,129.144095 C227.511025,129.144095 217.506758,124.623469 209.923349,115.582215 C204.031624,108.524205 201.085761,98.7246528 201.085761,86.1835596 L201.085761,40.1606638 C219.15946,40.1606638 233.811088,54.8122919 233.811088,72.885991 L233.811088,89.4209115 C233.811088,94.3790182 235.881942,96.8580715 240.02365,96.8580715 C244.107024,96.8580715 246.148711,94.3790182 246.148711,89.4209115 L246.148711,40.1606638 Z M536.756618,40.1606638 L536.756618,74.6340876 C532.148238,74.6340876 528.983623,75.4944649 527.262773,77.2152196 C525.541922,78.9359743 524.448161,82.3337356 523.98149,87.4085036 C522.464808,104.266066 515.931409,116.165522 504.381294,123.106871 C498.256233,126.723373 489.564479,128.531623 478.306033,128.531623 L473.755988,128.531623 L473.755988,93.8832075 L475.243502,93.8832075 C480.493555,93.8832075 484.241509,92.7895075 486.487365,90.6021075 C488.733221,88.4147075 490.03115,84.5794662 490.381154,79.0963836 C490.847825,70.1717916 491.679083,63.901245 492.874929,60.2847437 C494.070774,56.6682424 496.506215,53.0809064 500.181252,49.5227357 C506.597983,43.2813544 515.493905,40.1606638 526.869019,40.1606638 L536.756618,40.1606638 Z M409.565346,37.1857998 C423.682153,37.1857998 434.809348,41.3126945 442.946929,49.5664837 C451.084511,57.820273 455.153302,69.0926743 455.153302,83.3836876 L455.153302,127.28918 C437.079602,127.28918 422.427974,112.637552 422.427974,94.5638529 L422.427974,85.7460796 C422.427974,81.1379569 421.305046,77.4631249 419.059191,74.7215836 C416.813335,71.9800423 413.794555,70.6092716 410.00285,70.6092716 C406.561149,70.6092716 403.586119,71.863381 401.077761,74.3715996 C398.569402,76.8798183 397.315223,79.8546823 397.315223,83.2961916 C397.315223,86.9126929 398.452735,89.8875569 400.727757,92.2207835 C403.00278,94.5540102 405.890309,95.7206235 409.390344,95.7206235 C412.248706,95.7206235 414.902899,94.9623248 417.352924,93.4457275 L417.352924,127.306679 C414.669563,127.773325 412.219539,128.006647 410.00285,128.006647 C396.877719,128.006647 385.940109,123.690178 377.190022,115.057239 C368.439934,106.424301 364.064891,95.6039622 364.064891,82.5962236 C364.064891,69.938469 368.483685,59.2056264 377.321273,50.3976957 C386.158862,41.5897651 396.906886,37.1857998 409.565346,37.1857998 Z M600.439754,37.1857998 C614.556562,37.1857998 625.683757,41.3126945 633.821338,49.5664837 C641.95892,57.820273 646.02771,69.0926743 646.02771,83.3836876 L646.02771,127.28918 C627.954011,127.28918 613.302383,112.637552 613.302383,94.5638529 L613.302383,85.7460796 C613.302383,81.1379569 612.179455,77.4631249 609.933599,74.7215836 C607.687744,71.9800423 604.668963,70.6092716 600.877259,70.6092716 C597.435558,70.6092716 594.460528,71.863381 591.95217,74.3715996 C589.443811,76.8798183 588.189632,79.8546823 588.189632,83.2961916 C588.189632,86.9126929 589.327143,89.8875569 591.602166,92.2207835 C593.877189,94.5540102 596.764718,95.7206235 600.264753,95.7206235 C603.123115,95.7206235 605.777308,94.9623248 608.227332,93.4457275 L608.227332,127.306679 C605.543972,127.773325 603.093948,128.006647 600.877259,128.006647 C587.752128,128.006647 576.814518,123.690178 568.064431,115.057239 C559.314343,106.424301 554.939299,95.6039622 554.939299,82.5962236 C554.939299,69.938469 559.358094,59.2056264 568.195682,50.3976957 C577.03327,41.5897651 587.781294,37.1857998 600.439754,37.1857998 Z M20.6642066,85.6040861 C30.0506462,85.6040861 37.9753732,91.8620726 40.4933182,100.433196 L40.5471827,100.363411 L51.6605166,127.668163 L19.1881919,127.668163 L19.7811428,126.91167 C8.77823342,126.449107 0,117.3832 0,106.267141 C0,94.855251 9.25168045,85.6040861 20.6642066,85.6040861 Z M55.7779146,5.16576381 C64.6685765,5.16576381 72.6853537,10.5169689 76.0953622,18.727676 L121.03321,126.930197 L87.3955171,126.930197 C78.5048552,126.930197 70.488078,121.578992 67.0780696,113.368284 L22.1402214,5.16576381 L55.7779146,5.16576381 Z M122.936586,5.16576381 C131.827248,5.16576381 139.844025,10.5169689 143.254034,18.727676 L188.191882,126.930197 L154.554189,126.930197 C145.663527,126.930197 137.64675,121.578992 134.236741,113.368284 L89.298893,5.16576381 L122.936586,5.16576381 Z M660.516605,6.64169633 C678.450575,6.64169633 692.98893,21.1800513 692.98893,39.1140211 L692.98893,126.19223 C675.05496,126.19223 660.516605,111.653875 660.516605,93.7199056 L660.516605,6.64169633 Z M743.486629,39.1122117 L727.438385,70.817374 L751.291513,126.19223 C729.505192,126.19223 710.056708,112.534901 702.660916,92.0423163 L694.464945,69.3325592 L709.373149,39.1122117 L743.486629,39.1122117 Z M800,39.1122117 L800,93.7199056 C800,111.474536 785.750958,125.901124 768.064665,126.18788 L767.527675,126.19223 L767.527675,71.5845365 C767.527675,53.6505667 782.06603,39.1122117 800,39.1122117 Z M335.837108,37.0983038 C338.403801,37.0983038 341.728834,37.4191225 345.812208,38.0607598 L345.812208,73.0591596 C343.537185,71.775885 341.466331,71.1342476 339.599646,71.1342476 C333.649586,71.1342476 330.674557,75.6840396 330.674557,84.7836236 L330.674557,93.4439041 C330.674557,111.336866 316.314496,125.875857 298.490403,126.164847 L297.949229,126.169231 L297.949229,78.4839116 C297.949229,65.8844877 301.390931,55.8370304 308.274333,48.3415398 C315.157735,40.8460491 324.345327,37.0983038 335.837108,37.0983038 Z M783.763838,4.11793387e-13 C788.16294,4.11793387e-13 791.968743,1.54395734 795.181246,4.63187202 C798.393749,7.7197867 800,11.3704522 800,15.5838685 C800,20.0858749 798.480573,23.779829 795.441719,26.6657305 C792.402865,29.5516321 788.510238,30.9945829 783.763838,30.9945829 C779.017437,30.9945829 775.12481,29.5516321 772.085956,26.6657305 C769.047102,23.779829 767.527675,20.0858749 767.527675,15.5838685 C767.527675,11.3704522 769.133927,7.7197867 772.346429,4.63187202 C775.558932,1.54395734 779.364735,4.11793387e-13 783.763838,4.11793387e-13 Z"}})]),t._v(" "),o("g",{attrs:{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[o("g",{attrs:{id:"shouye",transform:"translate(-560.000000, -617.000000)"}},[o("g",{attrs:{id:"编组",transform:"translate(560.000000, 617.000000)"}},[o("mask",{attrs:{id:"mask-vxrei_cm19-2",fill:"white"}},[o("use",{attrs:{"xlink:href":"#path-vxrei_cm19-1"}})]),t._v(" "),o("path",{attrs:{stroke:"#FFFFFF","stroke-width":"2",d:"M247.148711,41.1761248 C255.512014,41.4350792 263.060003,44.9308946 268.581906,50.452797 C274.323061,56.193952 277.874039,64.1252838 277.874039,72.885991 L277.874039,72.885991 L277.874039,88.8084395 C277.874039,99.848184 274.209909,109.170176 266.867322,116.768477 C259.537952,124.353099 250.560521,128.144095 239.936149,128.144095 C227.831795,128.144095 218.079341,123.750028 210.691033,114.941386 C204.927734,108.037225 202.085761,98.439989 202.085761,86.1835596 L202.085761,86.1835596 L202.085761,41.1761248 C210.449063,41.4350792 217.997052,44.9308946 223.518955,50.452797 C229.26011,56.193952 232.811088,64.1252838 232.811088,72.885991 L232.811088,72.885991 L232.811088,89.4209115 C232.811088,92.2011681 233.442332,94.2578828 234.596766,95.6398746 C235.80274,97.0835663 237.592741,97.8580715 240.02365,97.8580715 C242.42717,97.8580715 244.196979,97.0823189 245.389359,95.6345099 C246.526551,94.2537102 247.148711,92.1985015 247.148711,89.4209115 L247.148711,89.4209115 Z M535.756618,41.1606638 L535.756618,73.6483779 C531.314295,73.7780028 528.278376,74.7854982 526.555686,76.5080931 C524.72955,78.3341264 523.483681,81.9015986 522.985513,87.3188951 C521.503636,103.789604 515.166321,115.458629 503.872862,122.245769 C497.867231,125.791754 489.337434,127.531623 478.306033,127.531623 L478.306033,127.531623 L474.755988,127.531623 L474.755988,94.8832075 C480.847679,94.8832075 484.799868,93.6416119 487.185087,91.3184758 C489.559308,89.0060522 491.007425,84.9830197 491.379123,79.1600873 C491.839854,70.3503576 492.64521,64.1647294 493.82437,60.5986893 C494.976669,57.1138794 497.338019,53.667463 500.878496,50.2395691 C507.127584,44.1612501 515.803014,41.1606638 526.869019,41.1606638 L526.869019,41.1606638 L535.756618,41.1606638 Z M409.565346,38.1857998 C423.370471,38.1857998 434.270838,42.1908418 442.234827,50.2685598 C450.203465,58.3509929 454.153302,69.399965 454.153302,83.3836876 L454.153302,83.3836876 L454.153302,126.273719 C445.789999,126.014765 438.24201,122.518949 432.720107,116.997047 C426.978952,111.255892 423.427974,103.32456 423.427974,94.5638529 L423.427974,94.5638529 L423.427974,85.7460796 C423.427974,80.864096 422.207715,76.9870065 419.832764,74.0878767 C417.395072,71.1121588 414.123375,69.6092716 410.00285,69.6092716 C406.289891,69.6092716 403.077756,70.9575417 400.370674,73.6644731 C397.663569,76.3714267 396.315223,79.5834117 396.315223,83.2961916 C396.315223,87.200506 397.558792,90.4031619 400.011777,92.9189036 C402.474835,95.4449763 405.597329,96.7206235 409.390344,96.7206235 C411.853311,96.7206235 414.174236,96.1928956 416.352924,95.1367525 L416.352924,95.1367525 L416.352924,126.459232 C414.054258,126.823448 411.937623,127.006647 410.00285,127.006647 C397.161766,127.006647 386.455148,122.793543 377.892347,114.345383 C369.334145,105.901761 365.064891,95.3158715 365.064891,82.5962236 C365.064891,70.2176009 369.384009,59.7201662 378.027191,51.10599 C386.671298,42.4908908 397.1847,38.1857998 409.565346,38.1857998 Z M600.439754,38.1857998 C614.24488,38.1857998 625.145247,42.1908418 633.109236,50.2685598 C641.077874,58.3509929 645.02771,69.399965 645.02771,83.3836876 L645.02771,83.3836876 L645.02771,126.273719 C636.664408,126.014765 629.116419,122.518949 623.594516,116.997047 C617.853361,111.255892 614.302383,103.32456 614.302383,94.5638529 L614.302383,94.5638529 L614.302383,85.7460796 C614.302383,80.864096 613.082124,76.9870065 610.707173,74.0878767 C608.269481,71.1121588 604.997784,69.6092716 600.877259,69.6092716 C597.164299,69.6092716 593.952165,70.9575417 591.245082,73.6644731 C588.537978,76.3714267 587.189632,79.5834117 587.189632,83.2961916 C587.189632,87.200506 588.4332,90.4031619 590.886185,92.9189036 C593.349243,95.4449763 596.471738,96.7206235 600.264753,96.7206235 C602.72772,96.7206235 605.048645,96.1928956 607.227332,95.1367525 L607.227332,95.1367525 L607.227332,126.459232 C604.928666,126.823448 602.812031,127.006647 600.877259,127.006647 C588.036175,127.006647 577.329557,122.793543 568.766756,114.345383 C560.208554,105.901761 555.939299,95.3158715 555.939299,82.5962236 C555.939299,70.2176009 560.258418,59.7201662 568.901599,51.10599 C577.545707,42.4908908 588.059108,38.1857998 600.439754,38.1857998 Z M20.6642066,86.6040861 C25.0760434,86.6040861 29.1486517,88.0567105 32.4293793,90.5101876 C35.8039047,93.0338109 38.3413004,96.6156284 39.5482006,100.7641 L39.5482006,100.7641 L50.1696862,126.668163 L21.2425842,126.668163 L21.8483089,125.895373 C15.7968388,126.250278 10.2942153,123.866543 6.46344983,119.868576 C3.07928622,116.336705 1,111.544723 1,106.267141 C1,100.837345 3.20098672,95.9215894 6.75949308,92.3632813 C10.3180196,88.8049531 15.2340795,86.6040861 20.6642066,86.6040861 Z M55.7779146,6.16576381 C60.0211851,6.16576381 64.0559149,7.44275593 67.436703,9.69943469 C70.8174912,11.9561135 73.5443378,15.1924789 75.1718418,19.1112254 L75.1718418,19.1112254 L119.535085,125.930197 L87.3955171,125.930197 C83.1522467,125.930197 79.1175169,124.653204 75.7367287,122.396526 C72.3559405,120.139847 69.629094,116.903482 68.0015899,112.984735 L68.0015899,112.984735 L23.638347,6.16576381 Z M122.936586,6.16576381 C127.179857,6.16576381 131.214586,7.44275593 134.595375,9.69943469 C137.976163,11.9561135 140.703009,15.1924789 142.330513,19.1112254 L142.330513,19.1112254 L186.693756,125.930197 L154.554189,125.930197 C150.310918,125.930197 146.276188,124.653204 142.8954,122.396526 C139.514612,120.139847 136.787766,116.903482 135.160262,112.984735 L135.160262,112.984735 L90.7970186,6.16576381 Z M661.516605,7.65728191 C669.810035,7.91614585 677.294788,11.3836156 682.770899,16.8597268 C688.46627,22.5550974 691.98893,30.4231786 691.98893,39.1140211 L691.98893,39.1140211 L691.98893,125.176645 C683.6955,124.917781 676.210747,121.450311 670.734636,115.9742 C665.039265,110.278829 661.516605,102.410748 661.516605,93.7199056 L661.516605,93.7199056 Z M741.859651,40.1122117 L726.334853,70.7832444 L749.762057,125.169321 C739.645592,124.866035 730.100403,121.563512 722.154453,115.983619 C713.809167,110.1233 707.227904,101.750955 703.601533,91.7028468 L703.601533,91.7028468 L695.550016,69.3933508 L709.994894,40.1122117 L741.859651,40.1122117 Z M799,40.1277973 L799,93.7199056 C799,102.316525 795.55332,110.108136 789.966441,115.788197 C784.370144,121.477832 776.626469,125.048932 768.056563,125.187913 L768.527,125.176 L768.527675,71.5845365 C768.527675,63.0641026 771.913546,55.3344813 777.4132,49.6677599 L777.745706,49.3302422 C783.221817,43.854131 790.70657,40.3866613 799,40.1277973 L799,40.1277973 Z M335.837108,38.0983038 C338.1846,38.0983038 341.176209,38.3733477 344.812208,38.9188557 L344.812208,38.9188557 L344.812208,71.4222255 C342.935014,70.555834 341.195819,70.1342476 339.599646,70.1342476 C336.242679,70.1342476 333.742378,71.4399852 332.068873,73.9993209 C330.501836,76.3958326 329.674557,79.9794691 329.674557,84.7836236 L329.674557,84.7836236 L329.674557,93.4439041 C329.674557,102.109631 326.200169,109.963878 320.568377,115.6896 C314.927092,121.424975 307.121165,125.024781 298.482301,125.16488 L298.949,125.153 L298.949229,78.4839116 C298.949229,66.3962691 302.163972,56.6971319 308.653643,49.4128622 L309.010873,49.0179335 C315.710335,41.7227395 324.659695,38.0983038 335.837108,38.0983038 Z M783.763838,1 C787.896489,1 791.47074,2.45232932 794.488257,5.35282059 C797.489287,8.23746387 799,11.6450133 799,15.5838685 C799,19.7873803 797.593109,23.2435425 794.753096,25.9406108 C791.893438,28.6563362 788.224752,29.9945829 783.763838,29.9945829 C779.302924,29.9945829 775.634237,28.6563362 772.774579,25.9406108 C769.934566,23.2435425 768.527675,19.7873803 768.527675,15.5838685 C768.527675,11.6450133 770.038388,8.23746387 773.039418,5.35282059 C776.056935,2.45232932 779.631187,1 783.763838,1 Z"}})])])])]),t._v(" "),o("span",{ref:"homeHeadDesc"},[t._v("FUTURE VIRTUAL IDOL IN THE METAVERSE")])]),t._v(" "),o("div",{staticClass:"buttonNextDiv"},[o("svg",{attrs:{width:"72px",height:"72px",viewBox:"0 0 72 72",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("defs",[o("linearGradient",{attrs:{id:"linearGradient-o5051rgtnb-1",x1:"100%",y1:"50%",x2:"0%",y2:"50%"}},[o("stop",{attrs:{"stop-color":"#7B27BF",offset:"0%"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#D0A2BE",offset:"53.9220219%"}}),t._v(" "),o("stop",{attrs:{"stop-color":"#CE5788",offset:"100%"}})],1)],1),t._v(" "),o("g",{attrs:{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[o("g",{attrs:{id:"shouye",transform:"translate(-1818.000000, -984.000000)"}},[o("g",{attrs:{transform:"translate(1819.000000, 985.000000)"}},[o("circle",{attrs:{stroke:"url(#linearGradient-o5051rgtnb-1)",cx:"35",cy:"35",r:"35"}}),t._v(" "),o("g",{attrs:{id:"arrow"}},[o("line",{attrs:{x1:"35.5",y1:"20",x2:"35.5",y2:"50",stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),o("polyline",{attrs:{stroke:"#FFFFFF","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",transform:"translate(35.446194, 39.000000) rotate(-45.000000) translate(-35.446194, -39.000000) ",points:"43.7520076 47.3058135 27.4480653 47.0742219 27.1403806 30.6941865"}}),t._v(" "),o("animateTransform",{attrs:{attributeName:"transform",begin:"0s",dur:"2s",values:"0,0; 0,-8; 0,0; 0,8;0,0",repeatCount:"indefinite"}})],1)])])])])])])]),t._v(" "),o("section",{ref:"sectionHomeVideo",staticClass:"HomeVideo HomeOther"},[o("div",{staticClass:"container"},[o("div",{staticClass:"center"},[o("span",{ref:"homeVideoTitle",staticClass:"title"},[t._v("TEASER TRAILER")]),t._v(" "),t._m(0)])])]),t._v(" "),t._m(1),t._v(" "),o("section",{staticClass:"HomeOther"}),t._v(" "),o("section",{staticClass:"HomeOther"}),t._v(" "),o("section",{staticClass:"HomeOther"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-bg"},[e("img",{attrs:{src:"/img/img-page02.png"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"HomeIntro HomeOther"},[o("div",{staticClass:"container"},[o("div",{staticClass:"center"},[o("p",{staticClass:"title"},[t._v("TEASER TRAILER1")])])])])}],!1,null,"07b0f4d3",null);e.default=component.exports}}]);