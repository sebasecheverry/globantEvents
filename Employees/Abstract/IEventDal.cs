using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Concrete;

namespace DataAccess.Abstract
{
    public interface IEventDal:IEntityRepository<DayEventEntity>
    {
        
    }
}
