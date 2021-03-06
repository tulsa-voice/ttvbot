var TabPanel = function(options = {}) {
    this.tabs = [];

    this.extendable = options.extendable || false;
    this.add_tab_text = options.add_tab_text || '+';
    this.add_tab_class = options.add_tab_class || 'js_add_tab';
};

var Tab = function(title, id, content) {
    this.title = title;
    this.id = id;
    this.content = content;
};

TabPanel.prototype.addTab = function(tab) {
    if ( tab instanceof Tab ) { this.tabs.push(tab); }
};

TabPanel.prototype.display = function() {
    var output = '<ul class="tabs" data-tab>';
    this.tabs.forEach(function(tab, index) {
        output += '<li class="tab-title active">';
        output += '<a href="#'+ tab.id +'">'+ tab.title +'</a></li>';
    });

    if(this.extendable) {
        output += '<li class="tab-title">';
        output += '<button class="'+this.add_tab_class+'">'+this.add_tab_text+'</button></li>';
    }

    output += '</ul>';

    output += '<div class="tabs-content">';
    this.tabs.forEach(function(tab) {
        output += '<div class="content" id="'+ tab.id +'">';

        switch (typeof tab.content) {
            case 'function':
                output += tab.content.call();
                break;
            case 'string':
                output += tab.content;
                break;
        }

        output += '</div>';
    });
    output += '</div>';

    return output;
};