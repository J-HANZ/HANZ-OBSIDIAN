2024-09-25 12:48

Status: #Child 

Tags: #OPP 

# OPP 4 SCADA sistemi
Aka. *Supervisory Control And Data Acquisition*
Je sistem programskih in strojnih komponent, ki omogočajo nadzor in vodenje postrojev lokalno in na daljavo. SCADA tudi zbira in obdeluje podatke.
### Deli sistema
*Vzami shemo iz moodla*
HMI -> Human Machine Interface, omogoči grafični prikaz procesov v sistemu.
MTU -> Master Terminal Unit (glavna krmilna enota) nadzira posamezne RTU-je (MASTER-SLAVE)
RTU -> Remote Terminal Unit, oddaljena krmilna enota
PLC -> Program Logic Controller so mikro-procesorske naprave, ki merijo podatke (čas, stanje...)
Strežniki -> Arhivirajo podatke
Vodila (kabli za povezavo):
	-LAN v pisarni, nadzornih sobah
	-Procesno vodilo, poveže strežnike z operacijskimi postajami (PLC, RTU, MTU)
	-Področno procesno vodilo (lokahlna povezava PLC, RTU s preostankom sistema)
IO naprave -> Stikala, motorji...a
### Naloge SCADA sistemov
Osnovne naloge SCADA sistemov:
	-Zajem podatkov v trenutnem času (real-time acquisition)
	-Objektna grafika: Dinamični objekti in animacije
	-Trendiranje  
	-Alarmiranje -> 1. opozorilo 2. izklop
	-Varnost, zaščita in omejitev dostopa
	
### Zajem podatkov (IQS):
I/O enote komunicirajo z zunanjim okoljem
	-Ima določene komunikacijske protokole (npr. MODBUS, OPC, Ethernet)
	-Real-time data acquisition -> zajem podatkov v realnem času
	-Nadzor komunikacije
	-Izmenjava podatkov z drugimi aplikacijam/sistemi
### Animacije
Omogoča spreminjanje poljubnih grafičnih objektov (barva, velikost, rotation...)
	-V povezavi z realnimi podatki
	-Kombinacija večih lastnosti na istem objektu
	-Izvedba animacij brez dodatnega programiranja
	-Hitrost osveževanja procesne slike
	
### Trendiranje
Je grafični prikaz podatko v časovni odvisnosti procesnih veličin:
	-Možno je iz trenutnega časa (real-time) ali zgodovine
	-Običajno do 6 pisal v enem trendu (vsak z svojo barvo)
	-Poljubna časovna os
	-Poljuben čas vzorčenja (frekvenca merjenja)
	-X-Y trendi (neodvisni od časa)
### Alarmiranje
Vsaki spremenjlivki (signala) lahko določimo več alarmov npr.
		->Npr. Nivoji: Zelo nizek, nizek, visok, zelo visok 
	-1. Opozorilo 2. Izklop
	-Proženje poljubnih akcij (ukrepov) glede na vrsto alarma (regulacija)
	-Okno za prikaz alarmov
	-Razvrščanje alarmov v skupine in nivoje
	-Zapis alarmov (alarm xxx ob 19.33...)


References:




Linked mentions:
- Prev [[OPP 3 Gradniki komunikacijskih omrežij]]
- Next [[OPP 5-S Vmesnik človek-stroj]]