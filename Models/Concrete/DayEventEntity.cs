using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Concrete
{
    public class DayEventEntity : IEvent
    {
        private List<PersonEntity> persons;

        public DayEventEntity()
        {
            persons = new List<PersonEntity>();
        }

        public int Id { get; set; }

        public string EventName { get; set; }

        public DateTime InitialDate { get; set; }

        public DateTime EndDate { get; set; }

        public int ModifySignUp { get; set; }

        public int PeopleQuantity { get; set; }

        public virtual IList<PersonEntity> Persons { get; set; }
    }
}
