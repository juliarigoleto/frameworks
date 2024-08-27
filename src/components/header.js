import React from 'react';

const Header = ({ setSelectedTeam }) => {
  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };

  return (
    <header>
      <h3 id='select'>Selecione um Time</h3>
      <select onChange={handleTeamChange}>
        <option value="">Escolha um time</option>
        <option value="palmeiras">Palmeiras</option>
        <option value="corinthians">Corinthians</option>
        <option value="sao_paulo">São Paulo</option>
        <option value="santos">Santos</option>
        <option value="redbull">Red Bull Bragantino</option>
        <option value="vasco">Vasco da Gama</option>
        <option value="botafogo">Botafogo</option>
        <option value="fluminense">Fluminense</option>
        <option value="flamengo">Flamengo</option>
        <option value="atletico">Atlético Mineiro</option>
        <option value="cruzeiro">Cruzeiro</option>
        <option value="gremio">Grêmio</option>
        <option value="internacional">Internacional</option>
      </select>
    </header>
  );
};

export default Header;
