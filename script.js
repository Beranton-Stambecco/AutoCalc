function berechnen() {
  const dieselVerbrauch = parseFloat(document.getElementById('dieselVerbrauch').value) || 0;
  const dieselPreis = parseFloat(document.getElementById('dieselPreis').value) || 0;
  const stromVerbrauch = parseFloat(document.getElementById('stromVerbrauch').value) || 0;
  const stromPreis = parseFloat(document.getElementById('stromPreis').value) || 0;

  const dieselKosten = dieselVerbrauch * dieselPreis;
  const stromKosten = stromVerbrauch * stromPreis;

  const aeqStrom = stromVerbrauch !== 0
    ? (dieselVerbrauch * dieselPreis) / stromVerbrauch
    : 0;

  const aeqDiesel = dieselVerbrauch !== 0
    ? (stromVerbrauch * stromPreis) / dieselVerbrauch
    : 0;

  document.getElementById('dieselKosten').innerText =
    dieselKosten.toFixed(2) + ' €';

  document.getElementById('stromKosten').innerText =
    stromKosten.toFixed(2) + ' €';

  document.getElementById('aeqStrom').innerText =
    aeqStrom.toFixed(2) + ' €/kWh';

  document.getElementById('aeqDiesel').innerText =
    aeqDiesel.toFixed(2) + ' €/l';
}
