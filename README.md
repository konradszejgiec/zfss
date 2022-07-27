# Zakładowy Fundusz Świadczeń Socjalnych

Link do strony: https://www.zfss-spsk4-lublin.pl/

## Spis treści

- [O projekcie](#o-projeckie)
- [Technologie](#technologie)

## O projekcie

Projekt stanowi stronę internetową o Zakładowym Funduszu Świadczeń Socjalnych skierowaną przede wszystkim do pracowników. Strona została podzielona na sekcje:

- I) Strona główna,
- I) Aktualności - zawiera najnowsze wiadomości oraz aktualności dotyczące ZFŚS w zakładzie pracy,
- III) Sekcja dla pracownika - zawierająca najważniejsze informacje o ZFŚS;
  Podsekcje:
  a) Wniosek (formularz) interaktywy o dofinansowanie z ZFŚS z opcją autuzupełniania i wydrukiem do PDF - autouzupełnianie wymaga zalogowania,
  b) Sekcja FAQ (dostępna po zalogowaniu),
  c) Regulaminy, zasady, druki (dostępna po zalogowaniu),
  d) Klauzula RODO,
  e) Karty Multisport,
- IV) Kontakt - informacje kontaktowe do pracownika HR (tj. do mnie),
- V) Panel administratora - zarządzanie bazą pracowników oraz bazą aktualności;
  Podsekcje:
  a) Zarządzanie aktualnościami - dodawanie, edycja, usuwanie aktualności (dostępne po zalogowaniu),
  b) Zarządzanie bazą - dodawanie, usuwanie bazy (dostępne po zalogowaniu).

Szkielet HTML strony bazuje na szablonie bootstrapu zaadaptowanym do renderowania po stronie serwera przy pomocy PUGa. Kod po stronie klienta został napisany w czystym JavaScripcie, zaś część po stronie serwera w NodeJS oraz Expressie. Dane przechowywane są w MongoDB. Do połączenia aplikacji z bazą danych użyty został Mongoose. Projekt jest w ciągle w fazie rozwoju.

Projekt postawiony na heroku + cloudflare + domena ovh.

## Technologie

- JavaScript
- Node.js
- Express
- MongoDB
- Mongoose
- PUG
- Bootstrap
