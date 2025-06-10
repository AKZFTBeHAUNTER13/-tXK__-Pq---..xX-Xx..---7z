fetch('Code.lua')
  .then(r => r.text())
  .then(t => document.getElementById('conteudo').textContent = t);
