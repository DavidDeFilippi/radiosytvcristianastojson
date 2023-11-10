const fs = require('fs');

const toJson = async () => {

    const defaultIcon = 'https://cdn.icon-icons.com/icons2/2098/PNG/512/radio_icon_128772.png';

    let radios = [

        { id: 'bbn', name: 'BBN', url: 'https://streams.radiomast.io/475ebed1-595e-4717-b888-64fe8fc6b09f', logo: 'https://bbn1.bbnradio.org/spanish/wp-content/uploads/sites/5/2017/01/bbnfavicon32x32.png', categoria: '' },
        // { id: 'armonia', name: 'Armonia', url: 'http://audio.armonia.cl:3032/1.mp3', logo: 'https://myradioonline.cl/public/uploads/radio_img/radio-armonia/play_250_250.jpg', categoria: '' },
        { id: 'manantialdevida', name: 'Manantial de Vida', url: 'https://audio3.tustreaming.cl:10955/stream', logo: 'https://radiomdv.cl/wp-content/uploads/2020/06/favicon.fw_-2-100x100.png', categoria: '' },
        { id: 'plenitud', name: 'Plenitud', url: 'https://audio1.tustreaming.cl/8190/stream', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd4K1EXhYyjmxwt6IlCDXhxM4RyaTdk1bIMEE4XVy5u7C-sKDP', categoria: '' },
        { id: 'radiocristianachile', name: 'Radio Cristiana Chile', url: 'https://streaming01.shockmedia.com.ar:10794/;stream.mp3', logo: 'https://yt3.googleusercontent.com/TsDsseKrFUzStoeAWfC501NGV0MbPeMAMqc8aU6RKRwZSfwZhLyM8Xx4tmpkn4OBdumpw8zvgw=s176-c-k-c0x00ffffff-no-rj', categoria: '' },
        { id: 'tiemposfinales', name: 'Tiempos Finales', url: 'https://audio2.tustreaming.cl/8130/stream', logo: 'https://tiemposfinales.cl/wp-content/uploads/2021/02/cropped-icono-final-180x180.png', categoria: '' },
        { id: 'radiofe', name: 'Radio Fe', url: 'https://ssl.newvoxlive.net:7030/;', logo: 'https://www.radiofe.cl/radio/assets/img/logo_radio_fe.png', categoria: '' },
        { id: 'radiocorporacion', name: 'Radio Corporacion', url: 'https://audio1.tustreaming.cl/8026/stream', logo: 'https://static.wixstatic.com/media/4218ee_dde16e9e46b1465ba81aea601ee695c8%7Emv2.jpg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/4218ee_dde16e9e46b1465ba81aea601ee695c8%7Emv2.jpg', categoria: '' },
        { id: 'radiocentrocristiano', name: 'Radio Centro Cristiano', url: 'https://vivo.miradio.in:7008/;', logo: 'https://static.mytuner.mobi/media/tvos_radios/ugfjbwqfq3fh.jpg', categoria: '' },
        { id: 'impsanmiguel', name: 'IMP San Miguel', url: 'https://audio.streaminghd.cl:9130/live', logo: 'https://web.impsanmiguel.cl/wp-content/uploads/2020/04/loguito-raster.png', categoria: '' },
        { id: 'nuestraradio', name: 'Nuestra Radio', url: 'https://radiostreaming.privateserverid.com/8026/stream', logo: 'https://www.nuestraradio.org/wp-content/uploads/2017/03/listen-400x400.png', categoria: '' },
        { id: 'iglesiaevangelicacristianaespiritual', name: 'Iglesia Evangelica Cristiana Espiritual', url: 'https://srv6.sonicpanel.cl/8066/stream', logo: defaultIcon, categoria: '' },
        { id: 'radiomenap', name: 'Radio Menap', url: 'https://srv6.sonicpanel.cl/8066/stream', logo: 'https://menap.cl/wp-content/uploads/2023/03/cropped-icono-logo-180x180.png', categoria: '' },
        { id: 'radiodivina', name: 'Radio Divina', url: 'https://cp.sonicpanel.stream:8006/;stream.mp3', logo: defaultIcon, categoria: '' },
        { id: 'iniciaradiocl', name: 'INICIARADIO.CL', url: 'https://sonando-us.digitalproserver.com/iniciaradio.aac', logo: 'https://iniciaradio.cl/wp-content/uploads/2023/05/Proyecto-nuevo.png', categoria: '' },
        { id: 'radiosinaitemuco', name: 'Radio Sinai Temuco', url: 'https://sonic.streamingchilenos.com/9976/;', logo: 'https://www.radiosinaitemuco.cl/img/logo.jpeg', categoria: '' },
        { id: 'Radiolibertad1063FM', name: 'Radio Libertad 106.3 FM', url: 'https://sonic.streamingchilenos.com/8136/stream', logo: 'https://radiolibertad.cl/wp-content/uploads/2021/08/LOGO-RADIO.png', categoria: '' },

    ];

    radios.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

    const jsonData = JSON.stringify(radios);

    fs.writeFileSync("radio.json", jsonData);

};

toJson();