! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
	function b() {
		var b = c(this),
			g = f.settings;
		return isNaN(b.datetime) || (0 == g.cutoff || Math.abs(e(b.datetime)) < g.cutoff) && a(this).text(d(b.datetime)), this
	}

	function c(b) {
		if (b = a(b), !b.data("timeago")) {
			b.data("timeago", {
				datetime: f.datetime(b)
			});
			var c = a.trim(b.text());
			f.settings.localeTitle ? b.attr("title", b.data("timeago").datetime.toLocaleString()) : !(c.length > 0) || f.isTime(b) && b.attr("title") || b.attr("title", c)
		}
		return b.data("timeago")
	}

	function d(a) {
		return f.inWords(e(a))
	}

	function e(a) {
		return (new Date).getTime() - a.getTime()
	}
	a.timeago = function(b) {
		return d(b instanceof Date ? b : "string" == typeof b ? a.timeago.parse(b) : "number" == typeof b ? new Date(b) : a.timeago.datetime(b))
	};
	var f = a.timeago;
	a.extend(a.timeago, {
		settings: {
			refreshMillis: 6e4,
			allowPast: !0,
			allowFuture: !1,
			localeTitle: !1,
			cutoff: 0,
			strings: {
				prefixAgo: null,
				prefixFromNow: null,
				suffixAgo: " ",
				suffixFromNow: "de ahora",
				inPast: "de un momento a",
				seconds: "menos de un minuto",
				minute: "alrededor de un minuto",
				minutes: "hace %d minutos",
				hour: "hace una hora",
				hours: "hace %d horas",
				day: "un dia",
				days: "%d dias",
				month: "aproximadamente un mes",
				months: "%d meses",
				year: "alrededor de un a\xf1o",
				years: "%d a\xf1os",
				wordSeparator: " ",
				numbers: []
			}
		},
		inWords: function(b) {
			function c(c, e) {
				var f = a.isFunction(c) ? c(e, b) : c,
					g = d.numbers && d.numbers[e] || e;
				return f.replace(/%d/i, g)
			}
			if (!this.settings.allowPast && !this.settings.allowFuture) throw "timeago allowPast and allowFuture settings can not both be set to false.";
			var d = this.settings.strings,
				e = d.prefixAgo,
				f = d.suffixAgo;
			if (this.settings.allowFuture && 0 > b && (e = d.prefixFromNow, f = d.suffixFromNow), !this.settings.allowPast && b >= 0) return this.settings.strings.inPast;
			var g = Math.abs(b) / 1e3,
				h = g / 60,
				i = h / 60,
				j = i / 24,
				k = j / 365,
				l = 45 > g && c(d.seconds, Math.round(g)) || 90 > g && c(d.minute, 1) || 45 > h && c(d.minutes, Math.round(h)) || 90 > h && c(d.hour, 1) || 24 > i && c(d.hours, Math.round(i)) || 42 > i && c(d.day, 1) || 30 > j && c(d.days, Math.round(j)) || 45 > j && c(d.month, 1) || 365 > j && c(d.months, Math.round(j / 30)) || 1.5 > k && c(d.year, 1) || c(d.years, Math.round(k)),
				m = d.wordSeparator || "";
			return void 0 === d.wordSeparator && (m = " "), a.trim([e, l, f].join(m))
		},
		parse: function(b) {
			var c = a.trim(b);
			return c = c.replace(/\.\d+/, ""), c = c.replace(/-/, "/").replace(/-/, "/"), c = c.replace(/T/, " ").replace(/Z/, " UTC"), c = c.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), c = c.replace(/([\+\-]\d\d)$/, " $100"), new Date(c)
		},
		datetime: function(b) {
			var c = a(b).attr(f.isTime(b) ? "datetime" : "title");
			return f.parse(c)
		},
		isTime: function(b) {
			return "time" === a(b).get(0).tagName.toLowerCase()
		}
	});
	var g = {
		init: function() {
			var c = a.proxy(b, this);
			c();
			var d = f.settings;
			d.refreshMillis > 0 && (this._timeagoInterval = setInterval(c, d.refreshMillis))
		},
		update: function(c) {
			var d = f.parse(c);
			a(this).data("timeago", {
				datetime: d
			}), f.settings.localeTitle && a(this).attr("title", d.toLocaleString()), b.apply(this)
		},
		updateFromDOM: function() {
			a(this).data("timeago", {
				datetime: f.parse(a(this).attr(f.isTime(this) ? "datetime" : "title"))
			}), b.apply(this)
		},
		dispose: function() {
			this._timeagoInterval && (window.clearInterval(this._timeagoInterval), this._timeagoInterval = null)
		}
	};
	a.fn.timeago = function(a, b) {
		var c = a ? g[a] : g.init;
		if (!c) throw new Error("Unknown function name '" + a + "' for timeago");
		return this.each(function() {
			c.call(this, b)
		}), this
	}, document.createElement("abbr"), document.createElement("time")
});