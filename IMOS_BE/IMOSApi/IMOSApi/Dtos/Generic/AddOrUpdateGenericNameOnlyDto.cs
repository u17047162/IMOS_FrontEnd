﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IMOSApi.Dtos.Generic
{
    public class AddOrUpdateGenericNameOnlyDto
    {
        [Required]
        public string Name { get; set; }

    }
}
