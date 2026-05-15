function berechnen() {
  const dieselVerbrauch =
    parseFloat(document.getElementById('dieselVerbrauch').value) || 0;

  const dieselPreis =
    parseFloat(document.getElementById('dieselPreis').value) || 0;

  const stromVerbrauch =
    parseFloat(document.getElementById('stromVerbrauch').value) || 0;

  const stromPreis =
    parseFloat(document.getElementById('stromPreis').value) || 0;

  // Werte speichern
  localStorage.setItem('dieselVerbrauch', dieselVerbrauch);
  localStorage.setItem('dieselPreis', dieselPreis);
  localStorage.setItem('stromVerbrauch', stromVerbrauch);
  localStorage.setItem('stromPreis', stromPreis);

  // Berechnungen
  const dieselKosten = dieselVerbrauch * dieselPreis;
  const stromKosten = stromVerbrauch * stromPreis;

  const aeqStrom =
    stromVerbrauch !== 0
      ? (dieselVerbrauch * dieselPreis) / stromVerbrauch
      : 0;

  const aeqDiesel =
    dieselVerbrauch !== 0
      ? (stromVerbrauch * stromPreis) / dieselVerbrauch
      : 0;

  // Ergebnisse anzeigen
  document.getElementById('dieselKosten').innerText =
    dieselKosten.toFixed(2) + ' €';

  document.getElementById('stromKosten').innerText =
    stromKosten.toFixed(2) + ' €';

  document.getElementById('aeqStrom').innerText =
    aeqStrom.toFixed(2) + ' €/kWh';

  document.getElementById('aeqDiesel').innerText =
    aeqDiesel.toFixed(2) + ' €/l';
}

// Gespeicherte Werte laden
window.onload = function () {

  document.getElementById('dieselVerbrauch').value =
    localStorage.getItem('dieselVerbrauch') || 6.5;

  document.getElementById('dieselPreis').value =
    localStorage.getItem('dieselPreis') || 1.75;

  document.getElementById('stromVerbrauch').value =
    localStorage.getItem('stromVerbrauch') || 18;

  document.getElementById('stromPreis').value =
    localStorage.getItem('stromPreis') || 0.39;

  berechnen();

  // Live-Berechnung bei jeder Änderung
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', berechnen);
  });
};
