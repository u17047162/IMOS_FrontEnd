﻿using System;
using System.Collections.Generic;

#nullable disable

namespace IMOSApi.Models
{
    public partial class Project
    {
        public Project()
        {
            Deliveries = new HashSet<Delivery>();
            Invoices = new HashSet<Invoice>();
            Projectemployees = new HashSet<Projectemployee>();
            Projectequipments = new HashSet<Projectequipment>();
            Projectmaterialrequests = new HashSet<Projectmaterialrequest>();
            Projectmaterials = new HashSet<Projectmaterial>();
            Safetyfilechecklists = new HashSet<Safetyfilechecklist>();
        }

        public int ProjectId { get; set; }
        public int ConstructionsiteId { get; set; }
        public int InitialrequestId { get; set; }
        public bool? Safetyfilecreated { get; set; }

        public virtual Constructionsite Constructionsite { get; set; }
        public virtual Request Initialrequest { get; set; }
        public virtual ICollection<Delivery> Deliveries { get; set; }
        public virtual ICollection<Invoice> Invoices { get; set; }
        public virtual ICollection<Projectemployee> Projectemployees { get; set; }
        public virtual ICollection<Projectequipment> Projectequipments { get; set; }
        public virtual ICollection<Projectmaterialrequest> Projectmaterialrequests { get; set; }
        public virtual ICollection<Projectmaterial> Projectmaterials { get; set; }
        public virtual ICollection<Safetyfilechecklist> Safetyfilechecklists { get; set; }
    }
}
