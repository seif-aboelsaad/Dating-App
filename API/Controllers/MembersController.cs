using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MembersController(AppDbContext context) : ControllerBase
    {
        // GET: api/members
        [HttpGet]
        public async Task<IActionResult> GetMembers()
        {
            var members = await context.Users.ToListAsync();
            return Ok(members);
        }
        // GET: api/members/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMemberById(string id)
        {
            var member = await context.Users.FindAsync(id);
            if (member == null)
            {
                return NotFound();
            }
            return Ok(member);
        }

    }
}
