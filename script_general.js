(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"data":{"defaultLocale":"en","textToSpeechConfig":{"speechOnTooltip":false,"pitch":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnInfoWindow":false,"rate":1},"locales":{"en":"locale/en.txt"},"history":{},"name":"Player9140"},"layout":"absolute","scrollBarMargin":2,"children":["this.MainViewer"],"gap":10,"height":"100%","width":"100%","backgroundColorRatios":[0],"propagateClick":false,"scrollBarColor":"#000000","hash": "9e3997f85b50d05087f21cf9419e6d8ef81ac5843a8dbb96acd1bb94002b1aac", "definitions": [{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_camera","initialSequence":"this.sequence_AE66BF2F_8D29_C01E_41D5_42F117A1ECF0"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_camera","initialSequence":"this.sequence_AE8EFF54_8D36_C002_41E1_8598CA7470EE"},{"aaEnabled":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","displayPlaybackBar":true,"class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"hfov":360,"label":trans('panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA.label'),"overlays":["this.overlay_A811F44B_8D29_C006_41D8_D0BB61062618"],"thumbnailUrl":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_t.jpg","data":{"label":"\u063a\u0631\u0641\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u0627\u062a"},"hfovMin":"150%","vfov":180,"class":"Panorama","id":"panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_A91EB128_8D36_4002_41BB_D5624D69B561","yaw":-133.85,"distance":4.77,"backwardYaw":71.08,"data":{"overlayID":"overlay_A811F44B_8D29_C006_41D8_D0BB61062618"},"select":"this.overlay_A811F44B_8D29_C006_41D8_D0BB61062618.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"url":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"colCount":24,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"colCount":12,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"colCount":6,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"colCount":6,"width":9216}]}}]},{"playbackBarBackgroundColorDirection":"vertical","minWidth":100,"playbackBarRight":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadow":true,"subtitlesGap":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","progressRight":"33%","vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBottom":10,"height":"100%","toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowColor":"#000000","toolTipShadowColor":"#333138","subtitlesFontColor":"#FFFFFF","toolTipPaddingTop":4,"progressHeight":2,"progressBorderSize":0,"data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowVerticalLength":1,"class":"ViewerArea","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"subtitlesBottom":50,"id":"MainViewer","progressBarBorderSize":0,"progressBarBorderRadius":2,"vrPointerSelectionColor":"#FF6600","playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":6,"width":"100%","playbackBarBorderRadius":0,"toolTipFontSize":"1.11vmin","vrPointerSelectionTime":2000,"toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowHorizontalLength":1,"progressOpacity":0.7,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"subtitlesTop":0,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"progressBarBackgroundColorRatios":[0],"propagateClick":false,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderColor":"#000000","progressBorderRadius":2,"toolTipPaddingLeft":6,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBorderSize":0,"playbackBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","progressLeft":"33%","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"toolTipFontColor":"#606060","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","subtitlesBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"minHeight":50},{"hfov":360,"label":trans('panorama_A91EB128_8D36_4002_41BB_D5624D69B561.label'),"overlays":["this.overlay_A96933B9_8D2B_C002_417F_3AAF60EBEEA0","this.overlay_A9886A32_8D2E_4006_41D4_82EA3BCDCD8B"],"thumbnailUrl":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_t.jpg","data":{"label":"\u0637\u0627\u0648\u0644\u0647 \u0627\u0644\u062a\u0635\u0645\u064a\u0645(1)"},"hfovMin":"150%","vfov":180,"class":"Panorama","id":"panorama_A91EB128_8D36_4002_41BB_D5624D69B561","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":10.04,"panorama":"this.panorama_A9132A99_8D29_C002_41C7_01D527716CDD","yaw":42.73,"data":{"overlayID":"overlay_A9886A32_8D2E_4006_41D4_82EA3BCDCD8B"},"select":"this.overlay_A9886A32_8D2E_4006_41D4_82EA3BCDCD8B.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","panorama":"this.panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA","yaw":71.08,"distance":4.95,"backwardYaw":-133.85,"data":{"overlayID":"overlay_A96933B9_8D2B_C002_417F_3AAF60EBEEA0"},"select":"this.overlay_A96933B9_8D2B_C002_417F_3AAF60EBEEA0.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"colCount":24,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"colCount":12,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"colCount":6,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"colCount":6,"width":9216}]}}]},{"thumbnailUrl":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_t.jpg","hfov":360,"vfov":180,"label":trans('panorama_A9132A99_8D29_C002_41C7_01D527716CDD.label'),"hfovMin":"150%","class":"Panorama","id":"panorama_A9132A99_8D29_C002_41C7_01D527716CDD","hfovMax":130,"data":{"label":"\u063a\u0631\u0641\u0629 \u063a\u062f\u064a\u0631"},"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"url":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"colCount":24,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"colCount":12,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"colCount":6,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_A9132A99_8D29_C002_41C7_01D527716CDD_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"colCount":6,"width":9216}]}}]},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_A91EB128_8D36_4002_41BB_D5624D69B561_camera","initialSequence":"this.sequence_AE7B2926_8D36_400E_41A7_9DEA3C0F1DB5"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"id":"panorama_A9132A99_8D29_C002_41C7_01D527716CDD_camera","initialSequence":"this.sequence_AE7D43F9_8D29_C002_41CD_E268F75A1DA6"},{"hfov":360,"label":trans('panorama_A9F5472C_8D36_C002_41E0_1A48E257A800.label'),"overlays":["this.overlay_A976082C_8D2A_C002_41C8_D9B422F6E056"],"thumbnailUrl":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_t.jpg","data":{"label":"\u0627\u0644\u0627\u0633\u062a\u0642\u0628\u0627\u0644(1)"},"hfovMin":"150%","vfov":180,"class":"Panorama","id":"panorama_A9F5472C_8D36_C002_41E0_1A48E257A800","hfovMax":130,"adjacentPanoramas":[{"class":"AdjacentPanorama","distance":5.22,"panorama":"this.panorama_A91EB128_8D36_4002_41BB_D5624D69B561","yaw":152.85,"data":{"overlayID":"overlay_A976082C_8D2A_C002_41C8_D9B422F6E056"},"select":"this.overlay_A976082C_8D2A_C002_41C8_D9B422F6E056.get('areas').forEach(function(a){ a.trigger('click') })"}],"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_t.jpg","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"url":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_0/{face}/0/{row}_{column}.jpg","rowCount":4,"height":2048,"colCount":24,"width":12288},{"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_0/{face}/1/{row}_{column}.jpg","rowCount":2,"height":1024,"colCount":12,"width":6144},{"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_0/{face}/2/{row}_{column}.jpg","rowCount":1,"height":512,"colCount":6,"width":3072},{"class":"TiledImageResourceLevel","url":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_0/{face}/vr/0.jpg","rowCount":1,"height":1536,"colCount":6,"width":9216}]}}]},{"class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A9F5472C_8D36_C002_41E0_1A48E257A800","camera":"this.panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A91EB128_8D36_4002_41BB_D5624D69B561","camera":"this.panorama_A91EB128_8D36_4002_41BB_D5624D69B561_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA","camera":"this.panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A9132A99_8D29_C002_41C7_01D527716CDD","camera":"this.panorama_A9132A99_8D29_C002_41C7_01D527716CDD_camera","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"class":"PanoramaCameraSequence","id":"sequence_AE66BF2F_8D29_C01E_41D5_42F117A1ECF0","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_AE8EFF54_8D36_C002_41E1_8598CA7470EE","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"enabledInCardboard":true,"data":{"label":"Polygon","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":100.4,"vfov":69.53,"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-19.6,"yaw":-133.85,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_A913E5E7_8D29_C00E_41A8_F7A4C1BCB4AA_HS_5wq92xxa.png","height":1184,"width":2048}]}}],"id":"overlay_A811F44B_8D29_C006_41D8_D0BB61062618","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A814F44F_8D29_C01E_41D6_F52C92B54B7C"]},{"enabledInCardboard":true,"data":{"label":"Polygon","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":55.76,"vfov":63.28,"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-18.94,"yaw":71.08,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_HS_fodi6xre.png","height":1167,"width":1002}]}}],"id":"overlay_A96933B9_8D2B_C002_417F_3AAF60EBEEA0","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A99023C6_8D2B_C00E_41E1_75F562053D76"]},{"enabledInCardboard":true,"data":{"label":"Polygon","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":8.76,"vfov":17.64,"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-9.6,"yaw":42.73,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_A91EB128_8D36_4002_41BB_D5624D69B561_HS_ew27c14k.png","height":294,"width":145}]}}],"id":"overlay_A9886A32_8D2E_4006_41D4_82EA3BCDCD8B","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A98E8A38_8D2E_4002_41D9_76262061CE9A"]},{"class":"PanoramaCameraSequence","id":"sequence_AE7B2926_8D36_400E_41A7_9DEA3C0F1DB5","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"class":"PanoramaCameraSequence","id":"sequence_AE7D43F9_8D29_C002_41CD_E268F75A1DA6","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"enabledInCardboard":true,"data":{"label":"Polygon","hasPanoramaAction":true},"useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"hfov":43.27,"vfov":33.59,"distance":50,"data":{"label":"Polygon"},"class":"HotspotPanoramaOverlayImage","pitch":-18.02,"yaw":152.85,"image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/panorama_A9F5472C_8D36_C002_41E0_1A48E257A800_HS_69inl4tr.png","height":571,"width":751}]}}],"id":"overlay_A976082C_8D2A_C002_41C8_D9B422F6E056","maps":[],"areas":["this.HotspotPanoramaOverlayArea_A9784834_8D2A_C002_41DF_566A23890F49"]},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A814F44F_8D29_C01E_41D6_F52C92B54B7C","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"image"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A99023C6_8D2B_C00E_41E1_75F562053D76","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"image"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A98E8A38_8D2E_4002_41D9_76262061CE9A","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"image"},{"class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_A9784834_8D2A_C002_41DF_566A23890F49","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"image"}],"backgroundColor":["#FFFFFF"],"class":"Player","id":"rootPlayer","scripts":{"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPixels":TDV.Tour.Script.getPixels,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getComponentByName":TDV.Tour.Script.getComponentByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"translate":TDV.Tour.Script.translate,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"clone":TDV.Tour.Script.clone,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"executeJS":TDV.Tour.Script.executeJS,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setValue":TDV.Tour.Script.setValue,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"init":TDV.Tour.Script.init,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"unregisterKey":TDV.Tour.Script.unregisterKey,"quizStart":TDV.Tour.Script.quizStart,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizFinish":TDV.Tour.Script.quizFinish,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlays":TDV.Tour.Script.getOverlays,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizShowScore":TDV.Tour.Script.quizShowScore,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"textToSpeech":TDV.Tour.Script.textToSpeech,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"mixObject":TDV.Tour.Script.mixObject,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"initQuiz":TDV.Tour.Script.initQuiz,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"createTween":TDV.Tour.Script.createTween,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"existsKey":TDV.Tour.Script.existsKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openLink":TDV.Tour.Script.openLink,"startMeasurement":TDV.Tour.Script.startMeasurement,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMainViewer":TDV.Tour.Script.getMainViewer,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getKey":TDV.Tour.Script.getKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement},"start":"this.init()","minWidth":0,"minHeight":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.4.js.map
})();
//Generated with v2023.1.4, Tue Jul 25 2023