var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};


module.exports.allLocations = function(req, res){
  const locations =  {"locations" : ["Fortaleza, Pinto Martins, Brasil (FOR)",
                      "São Paulo, Brasil - (SAO - Todos os Aeroportos)",
                      "Rio de Janeiro, Brasil - (RIO - Todos os Aeroportos)",
                      "Rio de Janeiro, Galeão - Antônio Carlos Jobim, Brasil (GIG)",
                      "Rio de Janeiro, Santos Dumont, Brasil (SDU)",
                      "Salvador, Luis E. Magalhães, Brasil (SSA)",
                      "Recife, Internacional dos Guararapes - Gilberto Freyre, Brasil (REC)",
                      "Maceió, Palmares, Brasil (MCZ)",
                      "Patos de Minas, Patos De Minas, Brasil (POJ)",
                      "Belo Horizonte, Brasil - (BHZ - Todos os Aeroportos)",
                      "Belo Horizonte, Internacional Tancredo Neves, Brasil (CNF)",
                      "Belo Horizonte, Pampulha, Brasil (PLU)",
                      "Porto Alegre, Salgado Filho, Brasil (POA)",
                      "Curitiba, Afonso Pena, Brasil (CWB)",
                      "São Paulo, Viracopos, Brasil (VCP)",
                      "São Paulo, Guarulhos Internacional, Brasil (GRU)",
                      "Los Angeles, Los Angeles, Estados Unidos da América (LAX)",
                      "Quebec, Quebec, Canadá (YQB)",
                      "Manaus, Eduardo Gomes Internacional, Brasil (MAO)"]};
  sendJsonResponse(res, 200, locations);
}
