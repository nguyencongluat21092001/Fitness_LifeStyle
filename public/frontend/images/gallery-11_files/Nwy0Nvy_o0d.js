if (self.CavalryLogger) { CavalryLogger.start_js(["RiTqqSj"]); }

__d("URLScraper",["ArbiterMixin","DataStore","Event","URLMatcher","mixin"],(function(a,b,c,d,e,f,g){var h="scraperLastPermissiveMatch";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b,c){var d;d=a.call(this)||this;d.input=b;d.enable();d.getValueFn=c;return d}var e=b.prototype;e.reset=function(){d("DataStore").set(this.input,h,null)};e.enable=function(){if(this.events)return;var a=function(a){window.setTimeout(this.check.bind(this,a),30)};this.events=c("Event").listen(this.input,{paste:a.bind(this,!1),keydown:a.bind(this,!0)})};e.disable=function(){if(!this.events)return;for(var a in this.events)this.events[a].remove();this.events=null};e.check=function(a){var c=this.getValueFn?this.getValueFn():this.input.value;if(a&&b.trigger(c))return;a=b.match(c);c=d("URLMatcher").permissiveMatch(c);c&&c!=d("DataStore").get(this.input,h)&&(d("DataStore").set(this.input,h,c),this.inform("match",{url:a||c,alt_url:c}))};return b}(c("mixin")(d("ArbiterMixin")));Object.assign(a,d("URLMatcher"));g["default"]=a}),98);
__d("getURLRanges",["URI","URLScraper","UnicodeUtils"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=[],e=0;while(!0){var f=a.substr(e),g=c("URLScraper").match(f);if(!g)break;if(!c("URI").isValidURI(g))break;var h=g;/^[a-z][a-z0-9\-+.]+:\/\//i.test(g)||(h="http://"+g);var i=f.indexOf(g);f=d("UnicodeUtils").strlen(f.substr(0,i));e+=f;i=g.length;b.push({offset:e,length:g.length,entity:{url:h}});e+=i}return b}g["default"]=a}),98);
__d("CallToActionTypes",[],(function(a,b,c,d,e,f){a=Object.freeze({OPEN_LINK:"OPEN_LINK",LIKE_PAGE:"LIKE_PAGE",SHOP_NOW:"SHOP_NOW",PLAY_GAME:"PLAY_GAME",INSTALL_APP:"INSTALL_APP",USE_APP:"USE_APP",CALL:"CALL",CALL_ME:"CALL_ME",VIDEO_CALL:"VIDEO_CALL",GET_MOBILE_APP:"GET_MOBILE_APP",INSTALL_MOBILE_APP:"INSTALL_MOBILE_APP",INSTALL_FREE_MOBILE_APP:"INSTALL_FREE_MOBILE_APP",USE_MOBILE_APP:"USE_MOBILE_APP",MOBILE_DOWNLOAD:"MOBILE_DOWNLOAD",BOOK_TRAVEL:"BOOK_TRAVEL",LISTEN_MUSIC:"LISTEN_MUSIC",WATCH_VIDEO:"WATCH_VIDEO",LEARN_MORE:"LEARN_MORE",SIGN_UP:"SIGN_UP",DOWNLOAD:"DOWNLOAD",WATCH_MORE:"WATCH_MORE",NO_BUTTON:"NO_BUTTON",VISIT_PAGES_FEED:"VISIT_PAGES_FEED",MISSED_CALL:"MISSED_CALL",CALL_NOW:"CALL_NOW",DIAL_CODE:"DIAL_CODE",APPLY_NOW:"APPLY_NOW",CONTACT:"CONTACT",BUY_NOW:"BUY_NOW",GET_OFFER:"GET_OFFER",GET_OFFER_VIEW:"GET_OFFER_VIEW",BUY_TICKETS:"BUY_TICKETS",UPDATE_APP:"UPDATE_APP",GET_DIRECTIONS:"GET_DIRECTIONS",BUY:"BUY",SEE_DETAILS:"SEE_DETAILS",MESSAGE_PAGE:"MESSAGE_PAGE",MESSAGE_USER:"MESSAGE_USER",DONATE:"DONATE",SUBSCRIBE:"SUBSCRIBE",SAY_THANKS:"SAY_THANKS",SELL_NOW:"SELL_NOW",SHARE:"SHARE",DONATE_NOW:"DONATE_NOW",GET_QUOTE:"GET_QUOTE",CONTACT_US:"CONTACT_US",ORDER_NOW:"ORDER_NOW",START_ORDER:"START_ORDER",ADD_TO_CART:"ADD_TO_CART",VIDEO_ANNOTATION:"VIDEO_ANNOTATION",MOMENTS:"MOMENTS",RECORD_NOW:"RECORD_NOW",VOTE_NOW:"VOTE_NOW",GIVE_FREE_RIDES:"GIVE_FREE_RIDES",REGISTER_NOW:"REGISTER_NOW",OPEN_MESSENGER_EXT:"OPEN_MESSENGER_EXT",CIVIC_ACTION:"CIVIC_ACTION",SEND_INVITES:"SEND_INVITES",REFER_FRIENDS:"REFER_FRIENDS",SAVE:"SAVE",REQUEST_TIME:"REQUEST_TIME",SEE_MENU:"SEE_MENU",EMAIL_NOW:"EMAIL_NOW",PAY_OR_REQUEST:"PAY_OR_REQUEST",SEARCH:"SEARCH",GET_SHOWTIMES:"GET_SHOWTIMES",TRY_IT:"TRY_IT",LISTEN_NOW:"LISTEN_NOW",TRY_ON:"TRY_ON",WOODHENGE_SUPPORT:"WOODHENGE_SUPPORT",SOTTO_SUBSCRIBE:"SOTTO_SUBSCRIBE",SEARCH_MORE:"SEARCH_MORE",FOLLOW_USER:"FOLLOW_USER",BLOOD_DONATIONS:"BLOOD_DONATIONS",UNLIKE_PAGE:"UNLIKE_PAGE",BET_NOW:"BET_NOW",OPEN_MOVIES:"OPEN_MOVIES",EVENT_RSVP:"EVENT_RSVP",INTERESTED:"INTERESTED",GO_LIVE:"GO_LIVE",SEND_TIP:"SEND_TIP",WHATSAPP_MESSAGE:"WHATSAPP_MESSAGE",GET_EVENT_TICKETS:"GET_EVENT_TICKETS",VIEW_INSTAGRAM_PROFILE:"VIEW_INSTAGRAM_PROFILE",INSTAGRAM_MESSAGE:"INSTAGRAM_MESSAGE",FOLLOW_NEWS_STORYLINE:"FOLLOW_NEWS_STORYLINE",LINK_CARD:"LINK_CARD",PRE_REGISTER:"PRE_REGISTER",SEE_MORE:"SEE_MORE",WATCH_APP_UPGRADE:"WATCH_APP_UPGRADE",LOYALTY_LEARN_MORE:"LOYALTY_LEARN_MORE",ACTIVATE_OFFER:"ACTIVATE_OFFER",BOOK_NOW:"BOOK_NOW",BOOK_TEST_DRIVE:"BOOK_TEST_DRIVE",CHECK_AVAILABILITY:"CHECK_AVAILABILITY",FIND_A_GROUP:"FIND_A_GROUP",FIND_YOUR_GROUPS:"FIND_YOUR_GROUPS",REMIND_ME:"REMIND_ME",PAY_TO_ACCESS:"PAY_TO_ACCESS",PURCHASE_GIFT_CARDS:"PURCHASE_GIFT_CARDS",FOLLOW_PAGE:"FOLLOW_PAGE",SEND_A_GIFT:"SEND_A_GIFT",JOBS_APPLY_NOW:"JOBS_APPLY_NOW",VIEW_RESUME:"VIEW_RESUME",SWIPE_UP_SHOP:"SWIPE_UP_SHOP",SWIPE_UP_PRODUCT:"SWIPE_UP_PRODUCT",SEND_GIFT_MONEY:"SEND_GIFT_MONEY",WATCH_MUSIC_VIDEO:"WATCH_MUSIC_VIDEO"});f["default"]=a}),66);