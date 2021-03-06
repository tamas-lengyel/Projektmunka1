using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.Text.Json.Serialization;

namespace Models
{
    // todo: emoji react (enum?)
    public class Messages
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string MessageID { get; set; }

        [StringLength(300)]
        public string Content { get; set; }

        public string SenderName { get; set; }

        public DateTime TimeStamp { get; set; }

        [NotMapped]
        public virtual ICollection<Reaction> Reactions { get; set; }

        public string ThreadID { get; set; }

        [NotMapped]
        [JsonIgnore]
        public virtual Threads Threads { get; set; }

        public Messages()
        {
            this.Reactions = new List<Reaction>();
        }
    }
}
