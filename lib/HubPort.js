/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2014 Kurento (http://kurento.org/)
 *
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Lesser General Public License
 * (LGPL) version 2.1 which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/lgpl-2.1.html
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 */

var inherits = require('inherits');

var MediaElement = require('./abstracts/MediaElement');

/**
 * Creates a {@link module:core.HubPort HubPort} for the given {@link module:core/abstracts.Hub Hub}
 *
 * @classdesc
 *  This {@link module:core/abstracts.MediaElement MediaElement} specifies a connection with a {@link module:core/abstracts.Hub Hub}
 *
 * @extends module:core/abstracts.MediaElement
 *
 * @constructor module:core.HubPort
 *
 * @param {external:String} id
 */
function HubPort(id){
  MediaElement.call(this, id);
};
inherits(HubPort, MediaElement);

/**
 * @alias module:core.HubPort.constructorParams
 *
 * @property {module:core/abstracts.Hub} hub
 *  {@link module:core/abstracts.Hub Hub} to which this port belongs
 */
HubPort.constructorParams = {
  hub: {
    type: 'Hub',
    required: true
  },
};

/**
 * @alias module:core.HubPort.events
 *
 * @extend module:core/abstracts.MediaElement.events
 */
HubPort.events = [];
HubPort.events.concat(MediaElement.events);

module.exports = HubPort;

HubPort.check = function(key, value)
{
  if(!(value instanceof HubPort))
    throw SyntaxError(key+' param should be a HubPort, not '+typeof value);
};
