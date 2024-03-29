function MarkerClusterer(e, t, r) {
    this.extend(MarkerClusterer, google.maps.OverlayView), this.map_ = e, this.markers_ = [], this.clusters_ = [], this.markersCluster_ = {}, this.markersUniqueID = 1, this.sizes = [53, 56, 66, 78, 90], this.styles_ = [], this.cssClass_ = "", this.cssDefaultClass_ = "cluster", this.setIndex_ = 0, this.ready_ = !1;
    var s = r || {};
    this.gridSize_ = void 0 !== s.gridSize ? s.gridSize : 60, this.minClusterSize_ = s.minimumClusterSize || 2, this.ignoreHiddenMarkers_ = s.ignoreHiddenMarkers || !1, this.maxZoom_ = s.maxZoom || null, this.styles_ = s.styles || [], this.cssClass_ = s.cssClass || null, this.imagePath_ = s.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_, this.imageExtension_ = s.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_, this.zoomOnClick_ = !0, null != s.zoomOnClick && (this.zoomOnClick_ = s.zoomOnClick), this.averageCenter_ = !1, null != s.averageCenter && (this.averageCenter_ = s.averageCenter), this.onMouseoverCluster_ = s.onMouseoverCluster, this.onMouseoutCluster_ = s.onMouseoutCluster, this.drawCluster_ = s.drawCluster, this.hideCluster_ = s.hideCluster, this.showCluster_ = s.showCluster, this.onAddCluster_ = s.onAddCluster, this.onRemoveCluster_ = s.onRemoveCluster, this.setupStyles_(), this.setMap(e), this.prevZoom_ = this.map_.getZoom();
    var o = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function() {
        var e = o.map_.getZoom();
        o.prevZoom_ != e && (o.prevZoom_ = e, o.resetViewport())
    }), google.maps.event.addListener(this.map_, "idle", function() {
        o.redraw()
    }), t && t.length && this.addMarkers(t, !1)
}

function Cluster(e) {
    this.markerClusterer_ = e, this.map_ = e.getMap(), this.gridSize_ = e.getGridSize(), this.minClusterSize_ = e.getMinClusterSize(), this.averageCenter_ = e.isAverageCenter(), this.center_ = null, this.markers_ = [], this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, e.getStyles(), e.getGridSize())
}

function ClusterIcon(e, t, r) {
    e.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.styles_ = t, this.padding_ = r || 0, this.cluster_ = e, this.center_ = null, this.map_ = e.getMap(), this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(this.map_)
}

function defaultClusterOnAdd(t) {
    if (t.div_ = document.createElement("DIV"), t.visible_) {
        var e = t.getPosFromLatLng_(t.center_);
        t.div_.style.cssText = t.createCss(e), t.div_.innerHTML = t.sums_.text, t.addClass()
    }
    t.getPanes().overlayMouseTarget.appendChild(t.div_);
    var r = !1,
        s = !1;
    google.maps.event.addDomListener(t.div_, "click", function(e) {
        r || t.triggerClusterClick(e)
    }), google.maps.event.addDomListener(t.div_, "mousedown", function() {
        s = !(r = !1)
    }), google.maps.event.addDomListener(t.div_, "mouseup", function() {
        s = r = !1
    }), google.maps.event.addDomListener(t.div_, "mousemove", function() {
        s && (r = !0)
    }), google.maps.event.addDomListener(t.div_, "mouseover", function(e) {
        t.triggerClusterMouseover(e)
    }), google.maps.event.addDomListener(t.div_, "mouseout", function(e) {
        t.triggerClusterMouseout(e)
    })
}

function defaultClusterDraw(e) {
    if (e.visible_) {
        var t = e.getPosFromLatLng_(e.center_);
        e.div_.style.top = t.y + "px", e.div_.style.left = t.x + "px"
    }
}

function defaultClusterHide(e) {
    e.div_ && (e.div_.style.display = "none", e.div_.className = ""), e.visible_ = !1
}

function defaultClusterShow(e) {
    if (e.div_) {
        var t = e.getPosFromLatLng_(e.center_);
        e.div_.style.cssText = e.createCss(t), e.div_.style.display = "", e.addClass()
    }
    e.visible_ = !0
}

function defaultClusterOnRemove(e) {
    e.div_ && e.div_.parentNode && (e.hide(), e.div_.parentNode.removeChild(e.div_), e.div_ = null)
}
MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_ = "https://raw.githubusercontent.com/gmaps-marker-clusterer/gmaps-marker-clusterer/master/images/m", MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png", MarkerClusterer.prototype.extend = function(e, t) {
    return function(e) {
        for (var t in e.prototype) this.prototype[t] = e.prototype[t];
        return this
    }.apply(e, [t])
}, MarkerClusterer.prototype.onAdd = function() {
    this.setReady_(!0)
}, MarkerClusterer.prototype.draw = function() {}, MarkerClusterer.prototype.setupStyles_ = function() {
    if (!this.styles_.length)
        for (var e, t = 0; e = this.sizes[t]; t++) {
            var r = "";
            r = "function" == typeof this.imagePath_ ? this.imagePath_(t, e) : this.imagePath_ + (t + 1) + "." + this.imageExtension_, this.styles_.push({
                url: r,
                height: e,
                width: e
            })
        }
}, MarkerClusterer.prototype.fitMapToMarkers = function() {
    for (var e, t = this.getMarkers(), r = new google.maps.LatLngBounds, s = 0; e = t[s]; s++) r.extend(e.getPosition());
    this.map_.fitBounds(r)
}, MarkerClusterer.prototype.setStyles = function(e) {
    this.styles_ = e
}, MarkerClusterer.prototype.getStyles = function() {
    return this.styles_
}, MarkerClusterer.prototype.isZoomOnClick = function() {
    return this.zoomOnClick_
}, MarkerClusterer.prototype.isAverageCenter = function() {
    return this.averageCenter_
}, MarkerClusterer.prototype.getMarkers = function() {
    return this.markers_
}, MarkerClusterer.prototype.getTotalMarkers = function() {
    return this.markers_.length
}, MarkerClusterer.prototype.setMaxZoom = function(e) {
    this.maxZoom_ = e
}, MarkerClusterer.prototype.getMaxZoom = function() {
    return this.maxZoom_
}, MarkerClusterer.prototype.getMarkersCluster = function(e) {
    return this.clusters_[this.markersCluster_[e.uniqueID]]
}, MarkerClusterer.prototype.calculator_ = function(e, t) {
    for (var r = 0, s = e.length, o = s; 0 !== o;) o = parseInt(o / 10, 10), r++;
    return {
        text: s,
        index: r = Math.min(r, t)
    }
}, MarkerClusterer.prototype.setCalculator = function(e) {
    this.calculator_ = e
}, MarkerClusterer.prototype.getCalculator = function() {
    return this.calculator_
}, MarkerClusterer.prototype.addMarkers = function(e, t) {
    for (var r, s = 0; r = e[s]; s++) this.pushMarkerTo_(r);
    t || this.redraw()
}, MarkerClusterer.prototype.pushMarkerTo_ = function(e) {
    if (e.isAdded = !1, e.draggable) {
        var t = this;
        google.maps.event.addListener(e, "dragend", function() {
            e.isAdded = !1, t.repaint()
        })
    }
    e.uniqueID = this.markersUniqueID, this.markersUniqueID++, this.markers_.push(e)
}, MarkerClusterer.prototype.addMarker = function(e, t) {
    this.pushMarkerTo_(e), t || this.redraw()
}, MarkerClusterer.prototype.removeMarker_ = function(e) {
    var t = -1;
    if (this.markers_.indexOf) t = this.markers_.indexOf(e);
    else
        for (var r, s = 0; r = this.markers_[s]; s++)
            if (r == e) {
                t = s;
                break
            } return -1 != t && (e.setMap(null), this.markers_.splice(t, 1), delete this.markersCluster_[e.uniqueID], !0)
}, MarkerClusterer.prototype.removeMarker = function(e, t) {
    var r = this.removeMarker_(e);
    return !(t || !r) && (this.resetViewport(), this.redraw(), !0)
}, MarkerClusterer.prototype.removeMarkers = function(e, t) {
    for (var r = !1, s = e.length; 0 <= s; s--) {
        var o = e[s],
            i = this.removeMarker_(o);
        r = r || i
    }
    if (!t && r) return this.resetViewport(), this.redraw(), !0
}, MarkerClusterer.prototype.setReady_ = function(e) {
    this.ready_ || (this.ready_ = e, this.createClusters_())
}, MarkerClusterer.prototype.getTotalClusters = function() {
    return this.clusters_.length
}, MarkerClusterer.prototype.getClusters = function() {
    return this.clusters_
}, MarkerClusterer.prototype.getMap = function() {
    return this.map_
}, MarkerClusterer.prototype.setMap = function(e) {
    this.map_ = e
}, MarkerClusterer.prototype.getGridSize = function() {
    return this.gridSize_
}, MarkerClusterer.prototype.setGridSize = function(e) {
    this.gridSize_ = e
}, MarkerClusterer.prototype.getMinClusterSize = function() {
    return this.minClusterSize_
}, MarkerClusterer.prototype.setMinClusterSize = function(e) {
    this.minClusterSize_ = e
}, MarkerClusterer.prototype.getExtendedBounds = function(e) {
    var t = this.getProjection(),
        r = new google.maps.LatLng(e.getNorthEast().lat(), e.getNorthEast().lng()),
        s = new google.maps.LatLng(e.getSouthWest().lat(), e.getSouthWest().lng()),
        o = t.fromLatLngToDivPixel(r);
    o.x += this.gridSize_, o.y -= this.gridSize_;
    var i = t.fromLatLngToDivPixel(s);
    i.x -= this.gridSize_, i.y += this.gridSize_;
    var n = t.fromDivPixelToLatLng(o),
        a = t.fromDivPixelToLatLng(i);
    return e.extend(n), e.extend(a), e
}, MarkerClusterer.prototype.isMarkerInBounds_ = function(e, t) {
    return t.contains(e.getPosition())
}, MarkerClusterer.prototype.clearMarkers = function() {
    this.resetViewport(!0), this.markers_ = [], this.markersCluster_ = {}, this.markersUniqueID = 1
}, MarkerClusterer.prototype.resetViewport = function(e) {
    for (var t, r = 0; t = this.clusters_[r]; r++) t.remove();
    var s;
    for (r = 0; s = this.markers_[r]; r++) s.isAdded = !1, e && s.setMap(null);
    this.clusters_ = [], this.markersCluster_ = {}, this.markersUniqueID = 1
}, MarkerClusterer.prototype.repaint = function() {
    var r = this.clusters_.slice();
    this.clusters_.length = 0, this.resetViewport(), this.redraw(), window.setTimeout(function() {
        for (var e, t = 0; e = r[t]; t++) e.remove()
    }, 0)
}, MarkerClusterer.prototype.redraw = function() {
    this.createClusters_()
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function(e, t) {
    if (!e || !t) return 0;
    var r = (t.lat() - e.lat()) * Math.PI / 180,
        s = (t.lng() - e.lng()) * Math.PI / 180,
        o = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(t.lat() * Math.PI / 180) * Math.sin(s / 2) * Math.sin(s / 2);
    return 6371 * (2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)))
}, MarkerClusterer.prototype.addToClosestCluster_ = function(e) {
    for (var t, r = 4e4, s = null, o = (e.getPosition(), null), i = 0; t = this.clusters_[i]; i++) {
        var n = t.getCenter();
        if (n) {
            var a = this.distanceBetweenPoints_(n, e.getPosition());
            a < r && (r = a, s = t, o = i)
        }
    }
    s && s.isMarkerInClusterBounds(e) ? s.addMarker(e) : ((t = new Cluster(this)).addMarker(e), this.clusters_.push(t), o = this.clusters_.length - 1);
    e.isAdded && (this.markersCluster_[e.uniqueID] = o)
}, MarkerClusterer.prototype.createClusters_ = function() {
    if (this.ready_)
        for (var e, t = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast()), r = this.getExtendedBounds(t), s = 0; e = this.markers_[s]; s++) e.isAdded || !this.isMarkerInBounds_(e, r) || this.ignoreHiddenMarkers_ && !e.getVisible() || this.addToClosestCluster_(e)
}, Cluster.prototype.isMarkerAlreadyAdded = function(e) {
    if (this.markers_.indexOf) return -1 != this.markers_.indexOf(e);
    for (var t, r = 0; t = this.markers_[r]; r++)
        if (t == e) return !0;
    return !1
}, Cluster.prototype.addMarker = function(e) {
    if (this.isMarkerAlreadyAdded(e)) return !1;
    if (this.center_) {
        if (this.averageCenter_) {
            var t = this.markers_.length + 1,
                r = (this.center_.lat() * (t - 1) + e.getPosition().lat()) / t,
                s = (this.center_.lng() * (t - 1) + e.getPosition().lng()) / t;
            this.center_ = new google.maps.LatLng(r, s), this.calculateBounds_()
        }
    } else this.center_ = e.getPosition(), this.calculateBounds_();
    e.isAdded = !0, this.markers_.push(e);
    var o = this.markers_.length;
    if (o < this.minClusterSize_ && e.getMap() != this.map_ && e.setMap(this.map_), o == this.minClusterSize_)
        for (var i = 0; i < o; i++) this.markers_[i].setMap(null);
    return o >= this.minClusterSize_ && e.setMap(null), this.updateIcon(), !0
}, Cluster.prototype.getMarkerClusterer = function() {
    return this.markerClusterer_
}, Cluster.prototype.getBounds = function() {
    for (var e, t = new google.maps.LatLngBounds(this.center_, this.center_), r = this.getMarkers(), s = 0; e = r[s]; s++) t.extend(e.getPosition());
    return t
}, Cluster.prototype.remove = function() {
    this.clusterIcon_.remove(), this.markers_.length = 0, delete this.markers_
}, Cluster.prototype.getSize = function() {
    return this.markers_.length
}, Cluster.prototype.getMarkers = function() {
    return this.markers_
}, Cluster.prototype.getCenter = function() {
    return this.center_
}, Cluster.prototype.calculateBounds_ = function() {
    var e = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(e)
}, Cluster.prototype.isMarkerInClusterBounds = function(e) {
    return this.bounds_.contains(e.getPosition())
}, Cluster.prototype.getMap = function() {
    return this.map_
}, Cluster.prototype.updateIcon = function() {
    var e = this.map_.getZoom(),
        t = this.markerClusterer_.getMaxZoom();
    if (t && t < e)
        for (var r, s = 0; r = this.markers_[s]; s++) r.setMap(this.map_);
    else if (this.markers_.length < this.minClusterSize_) this.clusterIcon_.hide();
    else {
        var o = this.markerClusterer_.getStyles().length,
            i = this.markerClusterer_.getCalculator()(this.markers_, o);
        this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.setSums(i), this.clusterIcon_.show()
    }
}, ClusterIcon.prototype.triggerClusterClick = function(e) {
    var t = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(t, "clusterclick", this.cluster_, e), t.isZoomOnClick() && this.map_.fitBounds(this.cluster_.getBounds())
}, ClusterIcon.prototype.triggerClusterMouseover = function(e) {
    var t = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(t, "clustermouseover", this.cluster_, e), "function" == typeof this.cluster_.markerClusterer_.onMouseoverCluster_ && this.cluster_.markerClusterer_.onMouseoverCluster_(this, e)
}, ClusterIcon.prototype.triggerClusterMouseout = function(e) {
    var t = this.cluster_.getMarkerClusterer();
    google.maps.event.trigger(t, "clustermouseout", this.cluster_, e), "function" == typeof this.cluster_.markerClusterer_.onMouseoutCluster_ && this.cluster_.markerClusterer_.onMouseoutCluster_(this, e)
}, ClusterIcon.prototype.onAdd = function() {
    "function" == typeof this.cluster_.markerClusterer_.onAddCluster_ ? this.cluster_.markerClusterer_.onAddCluster_(this) : defaultClusterOnAdd(this)
}, ClusterIcon.prototype.getPosFromLatLng_ = function(e) {
    var t = this.getProjection().fromLatLngToDivPixel(e);
    return "object" == typeof this.iconAnchor_ && 2 === this.iconAnchor_.length ? (t.x -= this.iconAnchor_[0], t.y -= this.iconAnchor_[1]) : (t.x -= parseInt(this.width_ / 2, 10), t.y -= parseInt(this.height_ / 2, 10)), t
}, ClusterIcon.prototype.draw = function() {
    "function" == typeof this.cluster_.markerClusterer_.drawCluster_ ? this.cluster_.markerClusterer_.drawCluster_(this) : defaultClusterDraw(this)
}, ClusterIcon.prototype.hide = function() {
    "function" == typeof this.cluster_.markerClusterer_.hideCluster_ ? this.cluster_.markerClusterer_.hideCluster_(this) : defaultClusterHide(this)
}, ClusterIcon.prototype.show = function() {
    "function" == typeof this.cluster_.markerClusterer_.showCluster_ ? this.cluster_.markerClusterer_.showCluster_(this) : defaultClusterShow(this)
}, ClusterIcon.prototype.remove = function() {
    this.setMap(null)
}, ClusterIcon.prototype.onRemove = function() {
    "function" == typeof this.cluster_.markerClusterer_.onRemoveCluster_ ? this.cluster_.markerClusterer_.onRemoveCluster_(this) : defaultClusterOnRemove(this)
}, ClusterIcon.prototype.setSums = function(e) {
    this.sums_ = e, this.text_ = e.text, this.index_ = e.index, this.div_ && (this.div_.innerHTML = e.text), this.useStyle()
}, ClusterIcon.prototype.useStyle = function() {
    var e = Math.max(0, this.sums_.index - 1);
    e = Math.min(this.styles_.length - 1, e);
    var t = this.styles_[e];
    this.url_ = t.url, this.height_ = t.height, this.width_ = t.width, this.textColor_ = t.textColor, this.anchor_ = t.anchor, this.textSize_ = t.textSize, this.backgroundPosition_ = t.backgroundPosition, this.iconAnchor_ = t.iconAnchor, this.setIndex_ = e
}, ClusterIcon.prototype.setCenter = function(e) {
    this.center_ = e
}, ClusterIcon.prototype.createCss = function(e) {
    var t = [];
    if (this.cluster_.getMarkerClusterer().cssClass_) t.push("top:" + e.y + "px; left:" + e.x + "px;");
    else {
        t.push("background-image:url(" + this.url_ + ");");
        var r = this.backgroundPosition_ ? this.backgroundPosition_ : "0 0";
        t.push("background-position:" + r + ";"), "object" == typeof this.anchor_ ? ("number" == typeof this.anchor_[0] && 0 < this.anchor_[0] && this.anchor_[0] < this.height_ ? t.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : "number" == typeof this.anchor_[0] && this.anchor_[0] < 0 && -this.anchor_[0] < this.height_ ? t.push("height:" + this.height_ + "px; line-height:" + (this.height_ + this.anchor_[0]) + "px;") : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), "number" == typeof this.anchor_[1] && 0 < this.anchor_[1] && this.anchor_[1] < this.width_ ? t.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : t.push("width:" + this.width_ + "px; text-align:center;")) : t.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
        var s = this.textColor_ ? this.textColor_ : "black",
            o = this.textSize_ ? this.textSize_ : 11;
        t.push("cursor:pointer; top:" + e.y + "px; left:" + e.x + "px; color:" + s + "; position:absolute; font-size:" + o + "px; font-family:Arial,sans-serif; font-weight:bold")
    }
    return t.join("")
}, ClusterIcon.prototype.addClass = function() {
    var e = this.cluster_.getMarkerClusterer();
    e.cssClass_ ? this.div_.className = e.cssClass_ + " " + e.cssDefaultClass_ + this.setIndex_ : this.div_.className = e.cssDefaultClass_ + this.setIndex_
}, (window.MarkerClusterer = MarkerClusterer).prototype.addMarker = MarkerClusterer.prototype.addMarker, MarkerClusterer.prototype.addMarkers = MarkerClusterer.prototype.addMarkers, MarkerClusterer.prototype.clearMarkers = MarkerClusterer.prototype.clearMarkers, MarkerClusterer.prototype.fitMapToMarkers = MarkerClusterer.prototype.fitMapToMarkers, MarkerClusterer.prototype.getCalculator = MarkerClusterer.prototype.getCalculator, MarkerClusterer.prototype.getGridSize = MarkerClusterer.prototype.getGridSize, MarkerClusterer.prototype.getExtendedBounds = MarkerClusterer.prototype.getExtendedBounds, MarkerClusterer.prototype.getMap = MarkerClusterer.prototype.getMap, MarkerClusterer.prototype.getMarkers = MarkerClusterer.prototype.getMarkers, MarkerClusterer.prototype.getMaxZoom = MarkerClusterer.prototype.getMaxZoom, MarkerClusterer.prototype.getMarkersCluster = MarkerClusterer.prototype.getMarkersCluster, MarkerClusterer.prototype.getStyles = MarkerClusterer.prototype.getStyles, MarkerClusterer.prototype.getTotalClusters = MarkerClusterer.prototype.getTotalClusters, MarkerClusterer.prototype.getTotalMarkers = MarkerClusterer.prototype.getTotalMarkers, MarkerClusterer.prototype.redraw = MarkerClusterer.prototype.redraw, MarkerClusterer.prototype.removeMarker = MarkerClusterer.prototype.removeMarker, MarkerClusterer.prototype.removeMarkers = MarkerClusterer.prototype.removeMarkers, MarkerClusterer.prototype.resetViewport = MarkerClusterer.prototype.resetViewport, MarkerClusterer.prototype.repaint = MarkerClusterer.prototype.repaint, MarkerClusterer.prototype.setCalculator = MarkerClusterer.prototype.setCalculator, MarkerClusterer.prototype.setGridSize = MarkerClusterer.prototype.setGridSize, MarkerClusterer.prototype.setMaxZoom = MarkerClusterer.prototype.setMaxZoom, MarkerClusterer.prototype.onAdd = MarkerClusterer.prototype.onAdd, MarkerClusterer.prototype.draw = MarkerClusterer.prototype.draw, Cluster.prototype.getCenter = Cluster.prototype.getCenter, Cluster.prototype.getSize = Cluster.prototype.getSize, Cluster.prototype.getMarkers = Cluster.prototype.getMarkers, ClusterIcon.prototype.onAdd = ClusterIcon.prototype.onAdd, ClusterIcon.prototype.draw = ClusterIcon.prototype.draw, ClusterIcon.prototype.onRemove = ClusterIcon.prototype.onRemove;