const fs = require('fs');

const toJson = async () => {

    const defaultIcon = "https://cdn-icons-png.flaticon.com/512/3443/3443580.png";

    let canales = [

        { id: 'televida', name: 'Televida', url: 'https://tls-cl.cdnz.cl/televida/live/playlist.m3u8', logo: 'https://yt3.googleusercontent.com/etjreFtsx3f1lo4qw1S-GFv1fkF-AqmncnVR-skhq3mbxfW60VmZrEjNZ04UjjybXJXgG6bBFYo=s900-c-k-c0x00ffffff-no-rj', categoria: '' },
       
        { id: 'enlace', name: 'Enlace', url: 'https://11554-1.b.cdn13.com/EnlaceTV/smil:enlace-fullHD.smil/playlist.m3u8', logo: 'https://www.enlace.org/wp-content/uploads/2015/08/cropped-logo-3D-preview-192x192.png', categoria: '' },
        
        { id: 'tnetv', name: 'TNETV', url: 'https://v2.tustreaming.cl/tnetv/index.m3u8', logo: 'https://www.tnetv.cl/wp-content/uploads/2023/05/icon-150x150.png', categoria: '' },
        
        { id: 'enlacebpb', name: 'Enlace BPB', url: 'https://v1.tustreaming.cl/enlacebpbtv/index.m3u8', logo: 'https://www.enlacebpb.cl/online/assets/images/logo-enlace-rrss-24x-1.png', categoria: '' },
       
        { id: 'corporaciontv', name: 'Corporacion TV', url: 'https://v2.tustreaming.cl/corporaciontv/index.m3u8', logo: 'https://yt3.googleusercontent.com/ytc/APkrFKZ-P8hrvlSlVHuHsZe1e9Fw_emQqy8H0-4GkcCg=s900-c-k-c0x00ffffff-no-rj', categoria: '' },
       
        { id: 'nctv', name: 'NCTV', url: 'https://unlimited2-cl-isp.dps.live/nctv/nctv.smil/playlist.m3u8', logo: 'https://nctv.cl/wp-content/uploads/2022/05/LOGO-NCTV-VECTOR-final.png', categoria: '' },

        { id: 'canal27', name: 'Canal 27', url: 'https://live.canal27.tv:3633/live/canal27live.m3u8', logo: 'https://www.canal27.org/wp-content/uploads/2023/06/Favicon-Canal27.png', categoria: '' },

        { id: 'cbnespanol', name: 'CBN Español', url: 'https://bcovlive-a.akamaihd.net/r21fb8503a4a74d098b798f16922b2a36/us-east-1/734546207001/playlist.m3u8', logo: 'https://www.cxtv.com.br/img/Tvs/Logo/webp-l/3cd3c736b140e74c9afb1c88fb207892.webp', categoria: '' },

        { id: 'cdminternacional', name: 'CDM Internacional', url: 'https://59825a54e4454.streamlock.net:8443/marcos536/marcos536/playlist.m3u8', logo: 'https://cdminternacional.com/wp-content/uploads/2022/05/cropped-cropped-cropped-cdm-redondo-1-192x192.png', categoria: '' },
        
        { id: 'ctnitv', name: 'CTNi TV', url: 'https://584097344c1f0.streamlock.net/48/smil:48.smil/chunklist_w69872908_b1564000_sleng.m3u8', logo: 'https://yt3.googleusercontent.com/6OdBDEPaJDzNNyeWFLFc2riSS33C3H6bw2Cqz8dfjg_We_5AquXB2OVubfOU4M6tWhAnkEYewQ=s900-c-k-c0x00ffffff-no-rj', categoria: '' },
        
        { id: 'canalluz', name: 'Canal Luz', url: 'https://g4.vxral-slo.transport.edge-access.net/a11/ngrp:canal_luz01-100009_all/Playlist.m3u8?sense=true', logo: 'https://canalluz.org/assets/images/favicon-canalluz-128x128-1.png', categoria: '' },

        { id: 'tiemposfinales', name: 'Tiempos Finales', url: 'https://v2.tustreaming.cl/tiemposf/index.m3u8', logo: 'https://tiemposfinales.cl/wp-content/uploads/2021/02/cropped-icono-final-180x180.png', categoria: '' },

        { id: 'alientovision', name: 'Aliento Vision', url: 'https://627bb251f23c7.streamlock.net:444/Alientoenvivo/Alientoenvivo/playlist.m3u8', logo: 'https://static.wixstatic.com/media/59c031_b10c329535aa411ca0d56dbdf8cb7bd1~mv2.png/v1/fill/w_80,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/alientoVisionLogo.png', categoria: '' },

        { id: 'cristianatv', name: 'Cristiana TV', url: 'https://cristianos2.todostreaming.es/live/malaga-livestream.m3u8', logo: defaultIcon, categoria: '' },

        { id: 'elvivientetv', name: 'El Viviente TV', url: 'https://elvivientetv.streamgato.us:3302/live/elvivientetvlive.m3u8', logo: 'https://elvivientetv.com/wp-content/uploads/2023/04/Sin-titulo-57-%C3%97-57-px-72-%C3%97-72-px-114-%C3%97-114-px-144-%C3%97-144-px.png', categoria: '' },

        { id: 'tnetv', name: 'TNE TV', url: 'https://v2.tustreaming.cl/tnetv/index.m3u8', logo: 'https://www.tnetv.cl/wp-content/uploads/2023/05/icon-150x150.png', categoria: '' },

        { id: 'esperanzatv', name: 'Esperanza TV', url: 'https://videodelivery.net/a23831aa01c4a0fd802360b889ea96ed/manifest/video.m3u8', logo: 'https://www.esperanzatv.org/fileadmin/HopeChannel/Design1/Images/Favicons/apple-touch-icon-180x180.png', categoria: '' },

        { id: 'reformatv', name: 'Reforma TV', url: 'https://5bf8041cb3fed.streamlock.net/ReformaTV/ReformaTV/playlist.m3u8', logo: 'https://www.reformatv.net/images/ico/apple-touch-icon-144-precomposed.png', categoria: '' },

        { id: 'eltv', name: 'ÉL Television', url: 'https://streamer1.streamhost.org/salive/eltvH/playlist.m3u8', logo: 'https://eltelevision.org/wp-content/uploads/2022/11/favicon.png', categoria: '' },

        { id: 'rtv', name: 'Radio y Television Vida RTV', url: 'https://vidartv2.todostreaming.es/live/radiovida-emisiontvhd.m3u8', logo: 'https://www.vidartv.com/images/logo-favicon.png', categoria: '' },

        { id: 'cielotv', name: 'Cielo TV', url: 'https://streaming.servervideo.net:1936/cielotv/ngrp:cielotv_all/playlist.m3u8', logo: 'https://cielotv.do/wp-content/uploads/2021/07/Asset-2.png', categoria: '' },

        { id: 'vida', name: 'Vida', url: 'https://2-fss-2.streamhoster.com/pl_120/200226-1449024-1/playlist.m3u8', logo: 'https://www.kscevida.com/wp-content/uploads/2021/03/VIDA-LOGO-Header-WEB.png', categoria: '' },

        { id: 'ejtv', name: 'EJTV', url: 'https://1-349-11554-1.b.cdn13.com/EJTV/smil:ejtv-hd.smil/playlist.m3u8', logo: 'https://ejtv.wpenginepowered.com/wp-content/uploads/2014/07/EJTVlogo.png', categoria: '' },

    ];

    canales.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    const jsonData = JSON.stringify(canales);

    fs.writeFileSync("tv.json", jsonData);

};

toJson();