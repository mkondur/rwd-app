$(function() {
    var MyNavbar = function(el) {
        this.navbar = $(el);

        this.render = function() {
            that = this
            this.appendMagicLine();
            that.magicLine = $('#magic-line');
            this.setMagicLine();
            this.bindEvents();
        }

        this.appendMagicLine = function() {
            this.navbar.append("<li id='magic-line'></li>");
        }

        this.setMagicLine = function() {
            this.magicLine.width($('.current_item').width()).css('left', $('.current_item a').position().left).data('origLeft', this.magicLine.position().left).data('origWidth', this.magicLine.width());
        }

        this.bindEvents = function() {
            return $('.navbar-nav li a').hover((function() {
                var $el, leftPos, newWidth;
                $el = $(this);
                leftPos = $el.position().left;
                newWidth = $el.parent().width();
                return that.magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth
                });
            }), function() {
                return that.magicLine.stop().animate({
                    left: that.magicLine.data('origLeft'),
                    width: that.magicLine.data('origWidth')
                });
            });
        };
    };

    new MyNavbar('.navbar-nav').render()

    $('.play-btn').click(function() {
        $(this).hide();
    })
});