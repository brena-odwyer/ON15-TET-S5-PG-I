
class FilamentoDna {
   constructor(transcricao){
      this.transcricao = transcricao;
      this.rna = []
   }


   converterParaRNA(dna){
      dna.split("")
      for (let letras of dna) {

      if (letras == "G") { letras = "C"
      this.rna.push(letras)
      } else if (letras == "C") {letras = "G"
      this.rna.push(letras)
      } else if (letras == "T") {letras = "A"
      this.rna.push(letras)
      } else {
      letras = "U"
      this.rna.push(letras)
      }
      this.rna.join("")
      
   }
   return this.rna
   }
}
   const dna = new FilamentoDna ("ATGCCGAAATTTGCG")
   console.log(`O filamento de RNA convertido é ${dna.converterParaRNA(dna.transcricao)}`)


//DNA	RNA
// G	C
// C	G
// T	A
// A	U