using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class PersonEntity : IEntity
    {
        public int Id { get; set; }

        public string Email { get; set; }
    }
}
