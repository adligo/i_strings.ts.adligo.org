/**
  * Copyright 2023 Adligo Inc / Scott Morgan
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

export interface I_String {
  /**
   * Indicates to Tests4ts that the toString has been overridden,
   * if this is not present, Tests4ts will call JSON.stringify 
   * on your objects as it's more informative.
   */
  hasToStringOverride(): boolean;
  
  toString(): string;
}

export interface I_Named {
  getName(): string;
}