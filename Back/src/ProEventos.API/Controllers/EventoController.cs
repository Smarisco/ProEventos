using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {   
        public IEnumerable<Evento> _evento = new Evento[]
        {
            new Evento()
            {
                EventoID =1,
                Tema = "Teste Inicial",
                Local = "Campo Grande",
                Lote = "1º Lote",
                QtdPessoas = 250,
                DataEvento = DateTime.Now.AddDays(2).ToString()

            },

            new Evento()
            {
                EventoID =2,
                Tema = "Teste Secundario",
                Local = "Ilha Solteira",
                Lote = "1º Lote",
                QtdPessoas = 100,
                DataEvento = DateTime.Now.AddDays(5).ToString()

            },

        };
        public EventoController()
        {           
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoID == id);
        }
    }
}
