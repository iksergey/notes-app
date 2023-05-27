using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Api.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class NotesController : ControllerBase
  {
    private readonly DataContext dataContext;

    public NotesController(DataContext dataContext)
    {
      this.dataContext = dataContext;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Note>>> Get()
    {
      return Ok(await dataContext.Notes.ToListAsync());
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Remove(Guid id)
    {
      Note note = await dataContext.Notes.FindAsync(id);
      dataContext.Notes.Remove(note);
      return Ok(await dataContext.SaveChangesAsync());
    }
    [HttpPost]
    public async Task<IActionResult> Create(Note note)
    {
      dataContext.Notes.Add(note);
      return Ok(await dataContext.SaveChangesAsync());
    }
  }
}