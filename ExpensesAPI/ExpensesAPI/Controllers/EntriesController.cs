using ExpensesAPI.Data;
using ExpensesAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpensesAPI.Controllers
{
    [EnableCors("http://localhost:4200","*","*")]
    public class EntriesController : ApiController
    {
        
        public IHttpActionResult GetEntries()
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var entries = context.Entries.ToList();
                    return Ok(entries);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        //send entry data as part of body request
        //datatype is Entry with defined name as entry
        [HttpPost]
        public IHttpActionResult PostEntry([FromBody]Entry entry)
        {
            //return badrequest if model is not valid
            if (!ModelState.IsValid) return BadRequest(ModelState);

            //enclose statement in try/catch incase something goes wrong
            try
            {
                //create reference to out appDbcontext
                using (var context = new AppDbContext())
                {
                    //add the entry using the reference
                    context.Entries.Add(entry);
                    context.SaveChanges();

                    return Ok("Entry was created!");
                }
            }
            catch (Exception ex)
            {
                //return the message of the exception
                return BadRequest(ex.Message);
            }
        }
    }
}
