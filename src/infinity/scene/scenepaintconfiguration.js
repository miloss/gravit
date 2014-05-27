(function (_) {
    /**
     * A paint configuration for model painting
     * @class IFScenePaintConfiguration
     * @constructor
     * @extends IFPaintConfiguration
     */
    function IFScenePaintConfiguration() {
    }

    IFObject.inherit(IFScenePaintConfiguration, IFPaintConfiguration);

    /**
     * The paint mode of painting
     * @enum
     */
    IFScenePaintConfiguration.PaintMode = {
        /**
         * Full painting in highest quality
         * including annotations
         */
        Full: 'F',

        /**
         * Fast painting in lower quality,
         * including annotations
         */
        Fast: 'S',

        /**
         * Outline painting
         * including annotations
         */
        Outline: 'L',

        /**
         * Full painting in highest quality
         * excluding annotations and clipping
         * to paper
         */
        Output: 'O'
    };

    /**
     * Localized names for IFScenePaintConfiguration.PaintMode
     */
    IFScenePaintConfiguration.PaintModeName = {
        'F': new IFLocale.Key(IFScenePaintConfiguration, 'paint.full'),
        'S': new IFLocale.Key(IFScenePaintConfiguration, 'paint.fast'),
        'L': new IFLocale.Key(IFScenePaintConfiguration, 'paint.outline'),
        'O': new IFLocale.Key(IFScenePaintConfiguration, 'paint.output')
    };

    /**
     * The current paint mode
     * @type {IFScenePaintConfiguration.PaintMode}
     */
    IFScenePaintConfiguration.prototype.paintMode = IFScenePaintConfiguration.PaintMode.Full;

    /**
     * Whether to render in pixel mode or not
     * @type {Boolean}
     */
    IFScenePaintConfiguration.prototype.pixelMode = false;

    /**
     * Whether to show guides or not
     * @type {Boolean}
     */
    IFScenePaintConfiguration.prototype.guides = true;

    /**
     * Whether to show annotations or not (guides, margins, etc.)
     * @type {Boolean}
     */
    IFScenePaintConfiguration.prototype.annotations = true;

    /**
     * Checks and returns whether to paint outlined or not
     * @param {IFPaintContext} [context] optional context
     * to include when checking
     * @returns {boolean}
     */
    IFScenePaintConfiguration.prototype.isOutline = function (context) {
        if (this.paintMode === IFScenePaintConfiguration.PaintMode.Outline) {
            return true;
        }
        if (context && context.isOutline()) {
            return context.isOutline();
        }
        return false;
    };

    /**
     * Checks and returns whether to paint annotations or not
     * @param {IFPaintContext} [context] optional context
     * to include when checking
     * @returns {boolean}
     */
    IFScenePaintConfiguration.prototype.isAnnotationsVisible = function (context) {
        if (!this.annotations || this.paintMode === IFScenePaintConfiguration.PaintMode.Output) {
            return false;
        }
        return true;
    };

    /**
     * Checks and returns whether to paint guides or not
     * @param {IFPaintContext} [context] optional context
     * to include when checking
     * @returns {boolean}
     */
    IFScenePaintConfiguration.prototype.isGuidesVisible = function (context) {
        if (!this.guides || !this.isAnnotationsVisible()) {
            return false;
        }
        return true;
    };

    /** @override */
    IFScenePaintConfiguration.prototype.toString = function () {
        return "[Object IFScenePaintConfiguration]";
    };

    _.IFScenePaintConfiguration = IFScenePaintConfiguration;
})(this);