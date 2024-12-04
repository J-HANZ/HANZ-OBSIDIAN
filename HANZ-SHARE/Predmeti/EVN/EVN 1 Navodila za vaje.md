72024-09-12 09:30

Status: #Child 

Tags: #EVN

# EVN Navodila za vaje
### Vaje z obvezno dokumentacijo
	- 1. Relejsko vezje
	- 2. Astabilni TL555
	- 3. Monostabilni TL555
	- 4. Invertiraj ojačevalnik LM741/TL072
	- 5. Neinvertir. ojačevalnik3
	- 6. Seštevalnik
	- 7. Izmenični odštevalnik
	- Invertiraj. ojačevalnik izmenični
	- Neinvertiraj ojačevalnik izmenični

#### 1. Relejsko vezje
	Potrebna dokumentacija: 
		Delovanje relejev
		Potrebno določiti histerezo releja (kjer rele se vklopi)
		Povratna zanka
	Exst.: Za tipko lahko uporabimo žičko, za breme pa LED + upor.
	Shema: XXX v zvezku (mogoče tudi v moodle-u)
	Pravilnostna tabela za motor in žarnico
	Logična tabela za izhod (ledica)
	Simulacija
	Opiši histerezno napetost (razlika med vklopno in izklopno napetostjo)

	
#### 2. Astabilni multivibrator  
	Potrebna dokumentacija:
		Opis vezja - zakaj se uporablja (sorazmerje pulza)
		Shema
		Kaj se zgodi, če spreminjamo R1 in R2 (Se spreminja prižigni čas D1 in D2)
		Čip 555
	Simulacija/Shema
	
#### 3. Monostabilni
	Dokumentacija
		Delovanje
		Kaj povzroča sorazmerje Ra in C
	Shema
	Simulacija

### 4. Inverterajoči ojačevalnik
	Opis vezja
	Shema
	Enačba
	Simulacija
	Meritvena tabela + spodnja zgornja meja
	Shema pinov
### 5. Neinverterajoči ojačevalnik
	Opis vezja
	Shema
	Enačba
	Simulacija
	Meritvena tabela
	+Navodila za merjenje
A) Merjenje frekvenčne karakteritike ojačanja:
Vhodni signal priklučimo med maso in vhod. Izhodno pa med maso in izhod. Nastavimo konstantno vrednost na vhod in pomerimo izhod.

B) Določitev podnje in zgornje meje: Pri frekvenci 10kHz nastavimo vhodno napetost na 1V, in višamo/nižamo frekvenco, da pade napetost za 29% to je sta spodnja/zgornja meja .

C) Merjenje SR: Hitrost spreminjanja izhodne napetosti merimo z osciloskopom. Z zaslona odčitamo čas, potreben da napetost naraste ali pade za določeno napetost. Izvedemo jo tako, da na vhod priklopimo pravokotne impulze s f=10kHz in amplitudo 5V. Izhodnim impulzom z osciloskopom pomerimo hitrost spremembe napetist pri naraščanju in padanju. To je tudi najvišja hitrost naraščanja/upadanja izhodne napetosti. Časovna baza in vertikalni kanal morata biti kalibrirana.
### 6. Seštevalnik napetosti (tokov)
	Opis vezja
	Shema
	Enačba
	Meritvena tabela
	Extra -> Nasičenje, kaj je potrebno paziti
	Kako merimo ojačanje:
	


### 7. Izmenični odštevalnik
	Opis vezja
	Shema
	Enačba
	Meritvena tabela
	Max izhodna nap: +Um, -Um
	Max izhodna (Primer: Razlika nap=24V +Um=12v, -Um=-12V) Uim=?, Iim=?
### Navodila za "dvojno" napajanje
Priklopimo tako, da imamo skupni ground in da je razlika med + in - 24V.

A) Merjenje ojačanja: 
Vhodno napetost merimo od vira (+ sponka ) proti ground-u (- sponka).
Izhodno napetost pa merimo tako, da postavimo pozitivno sponko na izhod negativno pa na ground.	
Izračunamo ojačanje Au = Uizh/Uvh 

B) Merjenje najvišjih vrednosti in toka: Za merjenje max toka nastavimo na maximalno napetost, da ugotovimo kolikšen je najvišji možen tok. Pomagamo si z osciloskopom, ker nam pokaže max vrednost, za katero smo prepričani, da ni efektivna.

C) Pri merjenju izhodnega toka dodamo še dekadni upor (bremenski) na izhod, zato da ne pride do kratkega stika pri merjenju.
### Ostalo
D) Pojasni zakaj pride do napake (Gen. napetosti, neneatnčni elementi in napaka pri merjenju)

E) Napiši največjo in najmanjšo napako pri merjenju. Ali se izmerjene vrednosti ujemajo z teoretičnimi?e

### Navodila za merjenje izm. ojačevalnika
#### 4. Merjenje vezja z operacijskim ojačevalnikom
	Opis vezja
	Shema
	Simulacija
	Meritvena tabela + spodnja zgornja meja
	+Opis ojačevalnika 741 -> opis + skica pinov...

### 8. Invertiraj. ojačevalnik izmenični


### 9. Neinvertiraj ojačevalnik izmenični





 # References:
	National semi conductor LM555 (PDF doc 1. 2. 3. vaja) 
			- http://web.mit.edu/6.131/www/document/lm555.pdf
Doc template: ![[POROcILO - PRAZNO W18.doc]]
Doc In PROGRESS: - 
![[EVNp - poročilo.doc]] 


Linked mentions:
- Prev [[EVN 0 MAIN]]