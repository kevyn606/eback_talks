AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60 ;
    const minutoEmMS = 1000 * 60;

     const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
     const horasAteOevento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
     const minutosAteOevento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS );
     const sedosAteOevento = Math.floor((distanciaAteOEvento % minutoEmMS ) / 1000);

     document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOevento}h ${minutosAteOevento}m ${sedosAteOevento}s`

     if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento Expirado'
     }

}, 1000);