import { HostListener, Injectable, OnDestroy } from '@angular/core';
import { Card } from './interfaces';
import { Observable, Subject, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PopupService } from './popup.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  popup: boolean = false;
  public popup$: Subject<Card> = new Subject<Card>()
  card!: Card;
  sub!: Subscription;
  width: number = window.innerWidth;
  category: 'Carevacuation' | 'Catering' | 'Firewood' | 'Industrialmountaineering' | 'Installationoffences' | 'Pavingslabs' | 'Translationagency' | 'Waterproofingworks' | 'Weldingworks' = 'Carevacuation';

  constructor(private route: Router, private popupService: PopupService) {
  
  }


catalogCarevacuation: Card[] = [{id: "car-eva1", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva2", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva3", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva4", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva5", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva6", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva7", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva8", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva9", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva10", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva11", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva12", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
}, {id: "car-eva13", name: 'Сайт евакуації автомобілів', price: 4700, promotionalPrice: 3500, category: 'Евакуація автомобілів', format: '.png', status: false
} ]

catalogCatering: Card[] = [{id: "cate1", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate2", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate3", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate4", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate5", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate6", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate7", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate8", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}, {id: "cate9", name: 'Сайт послуги кейтерингу', price: 4700, promotionalPrice: 3500, category: 'Послуги кейтерингу', format: '.png', status: false
}]

catalogFirewood: Card[] = [{id: "fire1", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire2", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire3", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire4", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire5", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire6", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire7", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire8", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire9", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire10", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire11", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire12", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire13", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire14", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}, {id: "fire15", name: 'Сайт доставки дров', price: 4700, promotionalPrice: 3500, category: 'Доставка дров', format: '.png', status: false
}]

catalogIndustrialmountaineering: Card[] = [{id: "ind-mou1", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou2", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou3", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou4", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou5", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou6", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou7", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou8", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou9", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou10", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou11", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou12", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou13", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou14", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou15", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou16", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}, {id: "ind-mou17", name: 'Сайт промислового альпінізму', price: 4700, promotionalPrice: 3500, category: 'Промисловий альпінізм', format: '.png', status: false
}]

catalogInstallationoffences: Card[] = [{id: "ins-of1", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of2", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of3", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of4", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of5", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of6", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of7", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of8", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of9", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of10", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of11", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of12", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of13", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of14", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of15", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of16", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of17", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}, {id: "ins-of18", name: 'Сайт виробницство та монтаж огорож', price: 4700, promotionalPrice: 3500, category: 'Виробницство та монтаж огорож', format: '.png', status: false
}]

catalogPavingslabs: Card[] = [{id: "pav-sla1", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla2", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla3", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla4", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla5", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla6", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla7", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla8", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla9", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla10", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla11", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla12", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla13", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla14", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}, {id: "pav-sla15", name: 'Сайт тротуарна плитка', price: 4700, promotionalPrice: 3500, category: 'Тротуарна плитка', format: '.png', status: false
}]

catalogTranslationagency: Card[] = [{id: "tra-age1", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age2", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age3", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age4", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age5", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age6", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age7", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age8", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age9", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}, {id: "tra-age10", name: 'Сайт бюро професійних мовних перекладів', price: 4700, promotionalPrice: 3500, category: 'Бюро професійних мовних перекладів', format: '.png', status: false
}]

catalogWaterproofingworks: Card[] = [{id: "wat-wor1", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor2", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor3", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor4", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor5", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor6", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor7", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor8", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor9", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor10", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}, {id: "wat-wor11", name: 'Сайт гідроізоляція', price: 4700, promotionalPrice: 3500, category: 'Гідроізоляція', format: '.png', status: false
}]

catalogWeldingworks: Card[] = [{id: "wel-wor1", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor2", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor3", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor4", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor5", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor6", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor7", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor8", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor9", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor10", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor11", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor12", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor13", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor14", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor15", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor16", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor17", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor18", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor19", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}, {id: "wel-wor20", name: 'Сайт професійні зварювальні роботи', price: 4700, promotionalPrice: 3500, category: 'Професійні зварювальні роботи', format: '.png', status: false
}]

public get catalog(): Card[] {
  switch(this.route.url) {
    case '/carevacuation': this.category = 'Carevacuation'
    return this.catalogCarevacuation
    case '/catering': this.category = 'Catering'
    return this.catalogCatering
    case '/firewood': this.category = 'Firewood'
    return this.catalogFirewood
    case '/industrialmountaineering': this.category = 'Industrialmountaineering'
    return this.catalogIndustrialmountaineering
    case '/installationoffences': this.category = 'Installationoffences'
    return this.catalogInstallationoffences
    case '/pavingslabs': this.category = 'Pavingslabs'
    return this.catalogPavingslabs
    case '/translationagency': this.category = 'Translationagency'
    return this.catalogTranslationagency
    case '/waterproofingworks': this.category = 'Waterproofingworks'
    return this.catalogWaterproofingworks
    case '/weldingworks': this.category = 'Weldingworks'
    return this.catalogWeldingworks
  }
  return this.catalogCarevacuation
}

clearCash(): Promise<any> {
  return caches.keys().then(cache => {
    console.log(cache)
  });
}

getCutSrcSet(img: string, format: '.png' | '.jpg') {
  return `../assets/img/${this.category}/383-cut/${img}${format}`
}

getSrcSet(img: string, format: '.png' | '.jpg'): string {
  const w = window.innerWidth;
  if (w <= 479) {

    return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;
    // return `../assets/img/${this.category}/383/${img}_383${format}, 
    // ../assets/img/${this.category}/818/${img}_818${format} 2x, 
    // ../assets/img/${this.category}/1151/${img}_1151${format} 3x`;
  } else if (480 <= w && w <= 767) {
      return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 2x, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 3x`;

    // return `../assets/img/${this.category}/818/${img}_818${format}, 
    // ../assets/img/${this.category}/1151/${img}_1151${format} 2x, 
    // ../assets/img/${this.category}/1920/${img}_1920${format} 3x`
  } else if (768 <= w && w <= 1023) {
    return `../assets/img/${this.category}/818/${img}_818${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 2x`
  } else if (1024 <= w && w <= 1349) {
    return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 1.5x`
  } else if (1350 <= w && w <= 1439) {
    return `../assets/img/${this.category}/1151/${img}_1151${format}, 
    ../assets/img/${this.category}/1920/${img}_1920${format} 1.5x`
  } else if (1440 <= w && w <= 1919) {
    return `../assets/img/${this.category}/1920/${img}_1920${format}`
  } else if (1920 <= w && w <= 2560) {
    return `../assets/img/${this.category}/1920/${img}_1920${format}`
  }
  return `../assets/img/${this.category}/1920/${img}_1920${format}`
}


@HostListener('window:resize', ['$event'])
onResize() {
    console.log(window.innerWidth)
}

srcTelBot(id: string): string {
 return `https://tg.pulse.is/WebsiteRental_bot?start=678586f2e8716273530d6c75|id_site=${id}|rental=${this.popupService.rental}`
}

  closePopup() {
    this.popup = false;
  }

}