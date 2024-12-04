2024-09-05 21:53

Status: #Adult 

Tags: #REG

# Krmilniki
S7-300 je modularni krmilnik za razliko od ALFE ima več delov (modulov).
Prve 3 cifre modulov so rezervirane za napajanje,komunikacijo in *prob še nekaj*.
Povežemo se z MPI ali internetnim kablom.

### Registri & naslovni biti
Digitalni naslovi: D.0,4,8,12... (Naslovi byte-ov)
Analogni naslovi: A.256,272,288... (Naslovi byte-ov)
Črkovne oznake I -> Input, Q -> Output, M -> memory, T -> timer, C -> counter

	Nible   -> 4 Biti
	Byte    -> 1 Byte (8bit)
	Word    -> 2 Byte-a
	DWord   -> 4 Byte-i
### Prioritete zlogov (word-ov)
Kadar naslavljamo zloge je potrebno, da se zavedamo kateri ima prioriteto. 
Npr.: Word1 je sestavljen iz byte1 in byte2 torej zavzema 16 bit-ov.
V primeru, da nalovimo byte2, dejansko naslavljamo 2. polovico word1.

### Digitalni vhodni moduli
Imamo A&B del, A del naslavlja 1. byte, B pa 2. byte
	`byte A -> 0-7bit I/O`
	`byte B->0-7bit + 1byte I/O`


Logična 1=13-30V
Logična 0=(-3)-5V

### Analogni vhodi
Napetostni: 0-10V
Tokovni: 0-20mA
ali: 4-20mA -> Da vemo, če je povezava vzpostavljena (teče 4mA), takšni so pri Siemensu


References:

Linked mentions:
[[REG 0 MAIN]]
[[REG 2 Pogosti elementi]]