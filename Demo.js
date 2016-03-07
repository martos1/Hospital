/**
 * 
 */
var hospital = new Hospital();

var drIvan = new Doctor('Ivan', 'Ivanov');
var drGosho = new Doctor('Gosho', 'Goshev');
var drMitko = new Doctor('Mitko', 'Dimitrov');

var mSestIvanova = new MedSestra('Ivanka', 'Ivanova');
var mSestGicheto = new MedSestra('Ginka', 'Ginkova');
var mSestNina = new MedSestra('Nina', 'Nikolina');

var pepo = new Pacient('Pepo', 'Ivanov', 'male');
var gogo = new Pacient('Georgi', 'Lenkov', 'male');
var viki = new Pacient('Viktoriq', 'Nikolova', 'female');
var tonka = new Pacient('Antoniq', 'Tonkova', 'female');
var tina = new Pacient('Tinaka', 'Kirova', 'female');

hospital.addDoctor(drIvan);
hospital.addDoctor(drGosho);
hospital.addDoctor(drMitko);

hospital.addMedSestra(mSestIvanova ,hospital.getOtdelenie()['ortopediq']);
hospital.addMedSestra(mSestGicheto ,hospital.getOtdelenie()['kardiologiq']);
hospital.addMedSestra(mSestNina ,hospital.getOtdelenie()['virusologiq']);

hospital.priem(pepo);
hospital.priem(gogo);
hospital.priem(viki);
hospital.priem(tonka);
hospital.priem(tina);