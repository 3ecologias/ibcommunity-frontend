$(function() {
    "use strict";

    function e(e) {
        var i, a, t = ["", "Moz", "moz", "webkit", "O", "o", "ms"];
        for (i = 0; i < t.length; i++)
            if (a = "" != t[i] ? t[i] + e.substr(0, 1, 1).toUpperCase() + e.substr(1) : e, "undefined" != typeof document.body.style[a]) return a;
        return null
    }
    $.fn.slider = function(i) {
        var a = $(this),
            t = $({}),
            n = a.find("[data-block]"),
            s = a.find(".js-slider__block"),
            r = a.find(".js-slider__block__navigation__arrow"),
            d = a.find(".js-slider__block__pagination__item"),
            l = a.find(".js-slider__pagination__item"),
            o = a.find(".js-slider__texts p");
        s.each(function() {
            var a = $(this),
                t = a.children(".js-slider__item").length;
            a.data({
                curSlide: 0
            }), a[0].style[e("transition")] = ["all", i.speed + "ms", "ease", "0s"].join(" "), a.on("slide", function(i, n, s) {
                if (void 0 !== s) return void 0;
                var r = a.data().curSlide;
                return 0 === r && "top" === n ? void 0 : r === t - 1 && "bottom" === n ? void 0 : ("top" === n ? r-- : r++, a.data({
                    curSlide: r
                }), void(a[0].style[e("transform")] = ["translateY(", 100 * -r, "%)"].join("")))
            }), a.on("slide", function(i, t, n) {
                return void 0 === n ? void 0 : (a.data({
                    curSlide: n
                }), void(a[0].style[e("transform")] = ["translateY(", 100 * -n, "%)"].join("")))
            }), a.on("slide", function() {
                var e = a.data().curSlide;
                d.removeClass("active").eq(e).addClass("active")
            }), a.on("slide", function() {
                var e = a.data().curSlide;
                o.removeClass("active").eq(e).addClass("active")
            })
        }), t.on("fade", function(e, i) {
            var a = n.filter(".active"),
                t = a.attr("data-block");
            return i === t ? void 0 : (n.removeClass("active").filter("[data-block=" + i + "]").addClass("active"), void $(".js-slider__pagination").find("li").removeClass("active").filter("[data-nav=" + i + "]").addClass("active"))
        }), r.on("click", function(e) {
            e.preventDefault(), s.trigger("slide", $(this).attr("data-direction"))
        }), l.on("click", function(e) {
            e.preventDefault(), t.trigger("fade", $(this).attr("data-nav"))
        }), d.on("click", function(e) {
            e.preventDefault(), s.trigger("slide", [void 0, $(this).index()])
        })
    };
    var i = $(".js-slider"),
        a = $("body"),
        t = ["page-blue", "page-green", "page-purple", "page-pink", "page-yellow", "page-indigo"],
        n = t.join(" "),
        s = $(".color-switch");
    s.on("click", function(e) {
        e.preventDefault();
        var i = "page-" + $(this).attr("data-bg");
        s.removeClass("active"), $(this).addClass("active"), a.removeClass(n).addClass(i)
    }), i.slider({
        speed: 1e3
    });
    var r = $(".gallery figure");
    r.on("click", function() {
        r.removeClass(), $(this).addClass("active").nextAll().addClass("after").end().prevAll().addClass("before")
    })
});
